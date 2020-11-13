module.exports = (sequelizeModels, Sequelize) => {
    const news = sequelizeModels.define(
        'news', {
            newsId: {
                type: Sequelize.INTEGER(),
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            textNews: {
                type: Sequelize.TEXT(),
                allowNull: false
            },
            dateEditionNews: {
                type: Sequelize.DATE(),
                allowNull: false
            }
        }, {
            tableName: 'news',
            timestamps: false,
            freezeTableName: true,
        }
    );
    return news;
};