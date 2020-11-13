const db = require('../config/db.config');

//Get news
module.exports.getNews = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.News.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.editNews = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.models.News.update(data, {
                where: {
                    newsId: data.newsId
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};