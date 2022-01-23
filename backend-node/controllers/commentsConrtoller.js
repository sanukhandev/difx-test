const {Comments} = require('../models');
const { mapData, mapError } = require('../utils/responseMapper');

const addComment = async (req, res) => {
    try {
        const {comment, status} = req.body;
        const {movieId} = req.params;
        const commentObj = await Comments.create({
            comment,
            status,
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