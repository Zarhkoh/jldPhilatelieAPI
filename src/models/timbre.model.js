module.exports = (sequelizeModels, Sequelize) => {
    const timbre = sequelizeModels.define(
        'timbre', {
        timbreId: {
            type: Sequelize.INTEGER(),
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        numeroTimbre: {
            type: Sequelize.INTEGER(10),
            allowNull: false
        },
        prixTimbre: {
            type: Sequelize.DECIMAL(6, 2),
            allowNull: false
        },
        imageTimbreUrl: {
            type: Sequelize.STRING(255),
        },
        quantiteTimbre: {
            type: Sequelize.INTEGER(2),
            allowNull: false
        },
        typeTimbre: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        anneeCoinDate: {
            type: Sequelize.INTEGER(4),
            allowNull: true
        },
        optionalInfos: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        tasType:
        {
            type: Sequelize.STRING(50),
            allowNull: true
        }
    }, {
        tableName: 'timbre',
        timestamps: false,
        freezeTableName: true,
    }
    );
    return timbre;
};