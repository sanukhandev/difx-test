const {Comments} = require('../models');
const { mapData, mapError } = require('../utils/responseMapper');

const addComment = async (req, res) => {
    try {
        const {comment, movieId} = req.body;
        const commentObj = await Comments.create({
            comment,
            status:1,
            movieId,
            userId: req.user.id
        });
        mapData(commentObj, res);
    } catch (error) {
        mapError(error, res);
    }
}


module.exports = {
    addComment
}