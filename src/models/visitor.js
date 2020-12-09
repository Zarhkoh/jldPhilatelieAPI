module.exports = (sequelizeModels, Sequelize) => {
    const visitor = sequelizeModels.define(
        'visitor', {
            visitorId: {
                type: Sequelize.INTEGER(),
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            visitorIp: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            visitorLastVisit: {
                type: Sequelize.DATE(),
                allowNull: false
            },
            visitorBrowser: {
                type: Sequelize.STRING(255)
            },
            visitCount: {
                type: Sequelize.INTEGER(),
                allowNull: false
            }
        }, {
            tableName: 'visitor',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return visitor;
};