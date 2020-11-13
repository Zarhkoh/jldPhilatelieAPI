const newsBuilder = require('../builders/news.builder');

module.exports.getNews = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const news = await newsBuilder.getNews();
            resolve(news);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.editNews = (newNews) => {
    return new Promise(async(resolve, reject) => {
        try {
            newNews.dateEditionNews = new Date();
            const res = await newsBuilder.editNews(newNews);
            resolve(res);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};