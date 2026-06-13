const PostModel = require("../models/posts.model")
const AuthorModel = require("../models/authors.model")

const checkPostId = async (req, res, next) => {

    const { postId } = req.params;


    // comprobamos que postId es numerico
    if (isNaN(postId)) {
        return res.status(400).json({ message: "el id del post  debe ser un numero" })
    }

    // comprobamos que postId existe
    const post = await PostModel.selectById(postId)
    if (!post) {
        return res.status(404).json({ message: "el id del post no existe" })
    }
    req.post = post;
    next();

}

const checkPostAuthorId = async (req, res, next) => {
    const { author_id } = req.body;

    const author = await AuthorModel.selectById(author_id);
    if (!author) {
        return res.status(404).json({ message: "el id del author no existe" })
    }

    req.author = author;
    next();
}

module.exports = {
    checkPostId,
    checkPostAuthorId
}
