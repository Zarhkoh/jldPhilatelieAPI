const newsService = require('../services/news.service');

exports.getNews = async(req, res) => {
    try {
        let data = await newsService.getNews();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};

exports.editNews = async(req, res) => {
    try {
        let data = await newsService.editNews(req.body.params.newNews);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(err.status).send(err);
    }
};