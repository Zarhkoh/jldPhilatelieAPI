module.exports = function (db) {
    initTimbre();
    function initTimbre() {
        const timbreList = [
            { timbreId: 20, numeroTimbre: 107, optionalInfos: 'A', prixTimbre: 1.38, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/892.jpg', quantiteTimbre: 3, typeTimbre: 'obl' },
            { timbreId: 18, numeroTimbre: 107, optionalInfos: 'B', prixTimbre: 1.38, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/892.jpg', quantiteTimbre: 3, typeTimbre: 'obl' },
            { timbreId: 19, numeroTimbre: 2001, anneeCoinDate: 1977, prixTimbre: 1.38, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/cd200177.jpg', quantiteTimbre: 3, typeTimbre: 'cd' },
            { timbreId: 10, numeroTimbre: 157, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/157.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 2, numeroTimbre: 158, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/158.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 3, numeroTimbre: 159, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/159.jpg', quantiteTimbre: 0, typeTimbre: 'occas' },
            { timbreId: 4, numeroTimbre: 160, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/160.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 5, numeroTimbre: 162, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/162.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 6, numeroTimbre: 163, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/163.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 7, numeroTimbre: 164, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/164.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 8, numeroTimbre: 165, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/165.jpg', quantiteTimbre: 0, typeTimbre: 'neuf' },
            { timbreId: 9, numeroTimbre: 167, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/167.jpg', quantiteTimbre: 0, typeTimbre: 'occas' },
            { timbreId: 1, numeroTimbre: 177, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/177.jpg', quantiteTimbre: 0, typeTimbre: 'occas' },
            { timbreId: 11, numeroTimbre: 181, prixTimbre: 33.70, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/181.jpg', quantiteTimbre: 4, typeTimbre: 'occas' },
            { timbreId: 12, numeroTimbre: 205, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/205.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
            { timbreId: 13, numeroTimbre: 245, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/245.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
            { timbreId: 14, numeroTimbre: 263, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/263.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
            { timbreId: 15, numeroTimbre: 290, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/290.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
            { timbreId: 16, numeroTimbre: 307, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/307.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
            { timbreId: 17, numeroTimbre: 334, prixTimbre: 0.30, imageTimbreUrl: 'https://jld-philatelie.pagesperso-orange.fr/334.jpg', quantiteTimbre: 1, typeTimbre: 'neuf' },
        ];
        db.models.Timbre.bulkCreate(timbreList);
    }

};