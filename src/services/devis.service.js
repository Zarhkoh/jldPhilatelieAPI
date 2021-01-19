const nodemailer = require('nodemailer');
const CONFIG = require('../config/config');
const devisBuilder = require('../builders/devis.builder');
const timbreBuilder = require('../builders/timbre.builder');
var dayjs = require('dayjs')


module.exports.sendDevis = (data) => {
    return new Promise(async(resolve, reject) => {
        let date = dayjs().format('DD/MM/YYYY [à] HH:mm');
        let totalPrice = 0;
        let sousTotal = 0;
        let timbreQuantity = 0;
        let message = '';
        let timbreList = '';
        let timbreTable = '';
        try {
            // On setup la liste de timbres
            await data.timbres.forEach(timbre => {
                timbreQuantity += Number(timbre.quantite);
                sousTotal += Number(timbre.prixTimbre) * timbre.quantite;

                // PARTIE LISTE TIMBRE POUR VENDEUR

                // on démarre la DIV du timbre en y ajoutant la classe & la quantité
                timbreList += '<div class="timbre">'.concat(timbre.quantite).concat('x ');
                // Catégorie du timbre si != classic
                if (timbre.catTimbre != 'classic') { timbreList.concat(timbre.tasType) }
                // On ajoute le numéro du timbre
                timbreList += timbre.numeroTimbre;
                // Si timbre d'occas, on ajoute l'étoile
                if (timbre.etatTimbre == 'occas') {
                    timbreList += '*';
                }
                // Si timbre SG on ajoute SG
                if (timbre.etatTimbre == 'sg') {
                    timbreList += 'SG';
                }
                if (timbre.catTimbre == 'cd') {
                    timbreList += '(' + timbre.annéeCoinDate + ')';
                }
                if (timbre.optionalInfos) {
                    timbreList += timbre.optionalInfos;
                }
                // Si timbre SG on ajoute SG
                if (timbre.etatTimbre == 'obl') {
                    timbreList += ' OBL';
                }
                timbreList += '</div>'

                // PARTIE TIMBRE TABLE POUR L'ACHETEUR
                timbreTable += '<tr>'
                    // Catégorie du timbre si != classic
                timbreTable += '<td>';
                if (timbre.catTimbre != 'classic') { timbreTable += timbre.tasType }
                // On ajoute le numéro du timbre
                timbreTable += timbre.numeroTimbre;
                // Si timbre d'occas, on ajoute l'étoile
                if (timbre.etatTimbre == 'occas') {
                    timbreTable += '*';
                }
                // Si timbre SG on ajoute SG
                if (timbre.etatTimbre == 'sg') {
                    timbreTable += 'SG';
                }
                if (timbre.catTimbre == 'cd') {
                    timbreTable += '(' + timbre.anneeCoinDate + ')';
                }
                if (timbre.optionalInfos) {
                    timbreTable += timbre.optionalInfos;
                }
                if (timbre.etatTimbre == 'obl') {
                    timbreTable += ' (oblitéré)';
                }
                timbreTable += '</td>' + '<td>' + timbre.prixTimbre + '€</td>' + '<td>' + timbre.quantite + '</td><td>' + Number(timbre.prixTimbre * timbre.quantite).toFixed(2) + '€</td></tr>'
            });
            totalPrice = Number(data.envoi.prixLivraison) + Number(sousTotal);
            if (data.optionalMessage != '') {
                message = '<p>Message lié à la commande :</p><div style="background-color:#e2e2e2;border:1px solid #bababa;padding:1em;">' + data.optionalMessage + '</div>';
            }
            const response = await devisBuilder.addDevis(data);
            await this.sendMailToSeller(data, date, timbreList, timbreQuantity, sousTotal, totalPrice, message, response);
            await this.sendMailToCustomer(data, date, timbreTable, timbreQuantity, sousTotal, totalPrice, message, response.devisId);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
        // data.timbres.forEach(timbre => {
        //     try {
        //         timbreBuilder.decrementTimbreQuantity(timbre.timbreId, timbre.quantite);
        //     } catch (error) {
        //         reject({
        //             status: 500,
        //             message: err
        //         });
        //     }
        // });
        resolve({
            status: 200,
            message: 'Mail sent'
        })
    });

}

module.exports.sendMailToSeller = async(data, date, timbreList, timbreQuantity, sousTotal, totalPrice, message, response) => {
    try {
        mailContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style>body{font-family:Helvetica}.content{max-width:600px !important;display:flex;flex-direction:column;justify-content:center;margin:auto}#header{display:flex;padding:0.5em}.centered{display:block;margin-left:auto;margin-right:auto}.mb{margin-bottom:3em}.card{background-color:rgb(245, 245, 245);border:1px rgb(214, 214, 214) solid;padding:0.5em;border-radius:5px;margin-bottom:2em}.timbreList{display:flex;flex-wrap:wrap}.timbre{background-color:#4592af;color:white;border-radius:5px;margin:0.2em;padding:0.2em}</style></head><body><h3 class="invisible">Une nouvelle commande est arrivée !</h3><div class="content"><div id="header"> <img class="centered" width="80px" height="80px" src="https://res.cloudinary.com/zarhkoh/image/upload/v1603802374/logo.png" /></div><div style="border-top: 5px solid #236088;"><div><div class="mb"><p>Commande du ' + date + '</p><p><strong>Mail de contact:</strong> ' + data.email + '</p></div><h3>D&#233;tail de la commande</h3><div class="card"><div class="timbreList"> ' + timbreList + '</div></div><div><p><strong>Nombre de timbres:</strong> ' + timbreQuantity + '</p><p class="mb"><strong>Sous-total:</strong> ' + sousTotal.toFixed(2) + '€</p><p class="mb"><strong>Livraison choisie: </strong>' + data.envoi.nomLivraison + " - " + data.envoi.prixLivraison + "€" + '</p><p>Total commande: ' + totalPrice.toFixed(2) + '€</p>' + message + '</div></div></div></div></body></html>';
        var mailOptions = {
            from: CONFIG.mail_sender_address,
            to: CONFIG.mail_sender_destination,
            subject: 'COMMANDE #' + response.devisId + ': ' + data.email,
            html: mailContent
        };
        var transporter = nodemailer.createTransport({
            host: CONFIG.mail_transport_smtp_domain,
            port: CONFIG.mail_transport_smtp_port,
            secure: true,
            auth: {
                user: CONFIG.mail_transport_smtp_login,
                pass: CONFIG.mail_transport_smtp_pwd
            },
            debug: true
        });
        await transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('mail error:', error);
                return false;
            } else {
                console.log('mail envoyé?', info);
                return true;
            }
        });
    } catch (error) {
        console.log('mail error: ', error);
        return false
    }
}

module.exports.sendMailToCustomer = async(data, date, timbreTable, timbreQuantity, sousTotal, totalPrice, message, devisId) => {
    try {
        mailContent = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style>body{font-family:Helvetica;font-size:1.05em;}.content{max-width:100% !important;justify-content:center;margin:auto;padding:1em;}#header{display:flex;padding:0.5em}.invisible{margin:0;color:transparent;height:0;}.centered{display:block;margin-left:auto;margin-right:auto}.justified{text-align: justify;}.mb{margin-bottom:3em}.mt{margin-top:3em}.pt{padding-top:1em}.card{background-color:rgb(245, 245, 245);border:1px rgb(214, 214, 214) solid;padding:0.5em;border-radius:5px;margin-bottom:2em}.timbreList{display:flex;flex-wrap:wrap}.timbre{background-color:#4592af;color:white;border-radius:5px;margin:0.2em;padding:0.2em}table{border-collapse:collapse}table,th,td{border:1px solid black;text-align:center; padding: 0.4em;}</style></head><body><div class="content"><div style="width:100%"><img class="centered" width="80" height="80" src="https://res.cloudinary.com/zarhkoh/image/upload/v1603802374/logo.png"/></div><div style="border-top: 5px solid #236088;"><div><div class="mb"><h3>Merci de votre commande !</h3></div><p>Récapitulatif de la commande #' + devisId + ' effectuée le ' + date + '.</p><table><thead><tr class="pt"><th>N&#176;</th><th>Prix</th><th>Qt&#233;</th><th>Prix total</th></tr></thead><tbody>' + timbreTable + '<tr><td><strong>SS TOTAL</strong></td><td></td><td>' + timbreQuantity + '</td><td>' + sousTotal.toFixed(2) + '€</td></tr></tbody></table></div><p><strong>Livraison choisie: </strong>' + data.envoi.nomLivraison + " - " + data.envoi.prixLivraison + "€" + '</p><div class="total mb"><p style="font-size:1.2em;"><strong>Total:</strong> ' + totalPrice.toFixed(2) + '€</p> ' + message + '<div class="mt justified"><h4>Et maintenant ?</h4><p>Votre commande est passée. Dans les prochains jours, vous recevrez un email de ma part (via l\'adresse email <strong> jld_philatelie@laposte.net</strong>) qui confirmera votre commande avec les informations pour le paiement.</p><p>Une fois le paiement reçu de mon côté, votre commande sera expédiée selon le mode d\'envoi choisi.</p><p>N\'hésitez pas à me contacter via l\'adresse email ci-dessus pour toute question.</p><p>Merci de votre confiance.</p><p style="margin-top: 2em;text-align:right">JLD-Philatelie.</p><p style="text-align:right">jld_philatelie@laposte.net</p></div></div></div></div></body></html>';
        var mailOptions = {
            from: CONFIG.mail_sender_address,
            to: data.email,
            subject: 'Votre commande chez JLD-Philatelie',
            html: mailContent
        };
        var transporter = nodemailer.createTransport({
            host: CONFIG.mail_transport_smtp_domain,
            port: CONFIG.mail_transport_smtp_port,
            secure: true,
            auth: {
                user: CONFIG.mail_transport_smtp_login,
                pass: CONFIG.mail_transport_smtp_pwd
            },
        });
        await transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('mail error:', error);
                return false;
            } else {
                console.log('mail envoyé?', info);
                return true;
            }
        });
    } catch (error) {
        console.log('mail error: ', error);
        return false;
    }
}