module.exports = (sequelizeModels, Sequelize) => {
    const timbre = sequelizeModels.define(
        'timbre', {
        numeroTimbre: {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true,
            unique: true
        }, prixTimbre: {
            type: Sequelize.DECIMAL(6, 2),
            allowNull: false,
        },
        imageTimbreUrl: {
            type: Sequelize.STRING(255),
        }, quantiteTimbre: {
            type: Sequelize.INTEGER(2),
            allowNull: false,
        }
    }, {
        tableName: 'timbre',
        timestamps: false,
        freezeTableName: true,
    }
    );
    return timbre;
};