module.exports = (sequelizeModels, Sequelize) => {
    const livraison = sequelizeModels.define(
        'livraison', {
            livraisonId: {
                type: Sequelize.INTEGER(),
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            prixLivraison: {
                type: Sequelize.DECIMAL(6, 2),
                allowNull: false
            },
            nomLivraison: {
                type: Sequelize.STRING(120),
                allowNull: false
            },
            dateEditionLivraison: {
                type: Sequelize.DATE(),
                allowNull: false
            }
        }, {
            tableName: 'livraison',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return livraison;
};