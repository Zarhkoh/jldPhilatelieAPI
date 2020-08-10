module.exports = function (db) {
    initTimbre();
    function initTimbre() {
        const timbreList = [
            { numeroTimbre: '177*', prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/177.jpg', quantiteTimbre: 0 },
            { numeroTimbre: '181*', prixTimbre: 33.70, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/181.jpg', quantiteTimbre: 4 }

        ];
        db.models.Timbre.bulkCreate(timbreList);
    }

};