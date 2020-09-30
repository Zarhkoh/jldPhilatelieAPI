module.exports = (sequelizeModels, Sequelize) => {
    const devis = sequelizeModels.define(
        'devis', {
        devisId: {
            type: Sequelize.INTEGER(),
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING(255),
        },
        date: {
            type: Sequelize.DATE(),
            allowNull: false
        },
        timbres: {
            type: Sequelize.JSON(),
            allowNull: false
        },
        envoi: {
            type: Sequelize.JSON(),
            allowNull: false
        },
        quantiteTimbres: {
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        valeur: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        optionalMessage: {
            type: Sequelize.STRING(255),
        }
    }, {
        tableName: 'devis',
        timestamps: false,
        freezeTableName: true,
    }
    );
    return devis;
};