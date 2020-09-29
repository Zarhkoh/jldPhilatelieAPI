const nodemailer = require('nodemailer');
const CONFIG = require('../config/config');
const devisBuilder = require('../builders/devis.builder');
const timbreBuilder = require('../builders/timbre.builder');

module.exports.sendDevis = (data) => {
    return new Promise(async (resolve, reject) => {
        console.log(data.envoi);
        let timbreTable = '';
        let totalPrice;
        let sousTotal = 0;
        let timbreQuantity = 0;
        let message = '';
        await data.timbres.forEach(timbre => {
            timbreQuantity += Number(timbre.quantite);
            sousTotal += Number(timbre.prixTimbre) * timbre.quantite;
            timbreTable += '<tr>'
            // Catégorie du timbre si != classic
            if (timbre.catTimbre != 'classic') { timbreTable += timbre.catTimbre + ' ' }
            timbreTable += '<td>';
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
                timbreTable += '(' + timbre.annéeCoinDate + ')';
            }
            if (timbre.catTimbre == 'obl' || timbre.catTimbre == 'spe') {
                timbreTable += timbre.optionalInfos;
            }
            timbreTable += '</td>' + '<td>' + timbre.prixTimbre + '€</td>' + '<td>' + timbre.quantite + '</td><td>' + Number(timbre.prixTimbre * timbre.quantite).toFixed(2) + '€</td></tr>'
        });
        totalPrice = Number(data.envoi.prix) + sousTotal;
        if (data.optionalMessage != '') {
            message = '<p>Message :</p><div style="background-color:#e2e2e2;border:1px solid #bababa;padding:1em;">' + data.optionalMessage + '</div>';
        }
        try {
            const response = await devisBuilder.addDevis(data);
            await this.sendMailToSeller(data, timbreTable, timbreQuantity, sousTotal, totalPrice, message, response);
            await this.sendMailToCustomer(data, timbreTable, timbreQuantity, sousTotal, totalPrice, message, response);
        } catch (err) {
            console.log('ON REJETE', err);
            reject({
                status: 500,
                message: err
            });
        }
        data.timbres.forEach(timbre => {
            try {
                timbreBuilder.decrementTimbreQuantity(timbre.timbreId, timbre.quantite);
            } catch (error) {
                reject({
                    status: 500,
                    message: err
                });
            }
        });
        resolve({
            status: 200,
            message: 'Mail sent'
        })
    });

}

module.exports.sendMailToSeller = async (data, timbreTable, timbreQuantity, sousTotal, totalPrice, message, response) => {
    try {
        mailContent = '<html><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <style>table{border-collapse: collapse;}table, th, td{border: 1px solid black; text-align: center;}</style></head><body> <div> <div style="display: flex"> <img width="80px" height="80px" src="https://jld-philatelie.fr/assets/img/logo.png"/> <h3 style="margin:1em 0 0 0;color:transparent;">Un nouveau devis est arrivé !</h3> </div><div style="border-top: 5px solid #236088;"> <div> <h5><strong>D&#233;tail du devis</strong></h5> <p>Mail de contact: ' + data.email + '</p><table> <thead class="thead-light"> <tr> <th>N&#176;</th> <th>Prix</th> <th>Qt&#233;</th> <th>Prix total</th> </tr></thead> <tbody>' + timbreTable + ' <tr> <td><strong>SS TOTAL</strong></td><td></td><td>' + timbreQuantity + '</td><td>' + sousTotal.toFixed(2) + '€</td></tr><tr> <td><strong>ENVOI ' + data.envoi.type + '</strong></td><td>' + Number(data.envoi.prix).toFixed(2) + '€</td><td>1</td><td>' + Number(data.envoi.prix).toFixed(2) + '€</td></tr><tr> <td><strong>TOTAL</strong></td><td></td><td></td><td>' + totalPrice.toFixed(2) + '€</td></tr></tbody> </table> </div></div></div>' + message + '</body></html>';
        var mailOptions = {
            from: CONFIG.mail_sender_address,
            to: CONFIG.mail_sender_destination,
            subject: 'DEVIS #' + response.devisId + ': ' + data.email,
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
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("l'erreur", error);
            } else {
                console.log('mail envoyé: ', info);
            }
        });
        return true;
    } catch (error) {
        console.log(error);
        return error
    }
}

module.exports.sendMailToCustomer = async (data, timbreTable, timbreQuantity, sousTotal, totalPrice, message, response) => {
    try {
        mailContent = '<html><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <style>table{border-collapse: collapse;}table, th, td{border: 1px solid black; text-align: center;}</style></head><body> <div> <div style="display: flex"> <img width="80px" height="80px" src="https://jld-philatelie.fr/assets/img/logo.png"/> <h3 style="margin:1em 0 0 0;color:transparent;">Votre devis a été envoyé</h3> </div><div style="border-top: 5px solid #236088;"> <div> <h5><strong>D&#233;tail du devis</strong></h5> <table> <thead class="thead-light"> <tr> <th>N&#176;</th> <th>Prix</th> <th>Qt&#233;</th> <th>Prix total</th> </tr></thead> <tbody>' + timbreTable + ' <tr> <td><strong>SS TOTAL</strong></td><td></td><td>' + timbreQuantity + '</td><td>' + sousTotal.toFixed(2) + '€</td></tr></tbody> </table> </div><div id="livraison">Livraison choisie: ' + data.envoi.denomination + '</div><div class="total"> <p>Total: ' + totalPrice + '</p></div></div></div>' + message + '</body></html>';
        var mailOptions = {
            from: CONFIG.mail_sender_address,
            to: data.email,
            subject: 'JLD-Philatelie - Devis #' + response.devisId,
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
            logger: true

        });
        await transporter.sendMail(mailOptions, function (error, info) {
            console.log('sending mail');
            if (error) {
                console.log('envoie erreur: ', error);
            } else {
                console.log('mail envoyé: ', info);
            }
        });
    } catch (error) {
        console.log(error);
    }
}