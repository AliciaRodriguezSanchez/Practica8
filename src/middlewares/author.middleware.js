const AuthorModel = require("../models/authors.model")
const checkAuthorId = async (req, res, next) => {
   ;
    const { authorId } = req.params;

    // comprobamos que authorId es numerico
    if (isNaN(authorId)) {
        return res.status(400).json({ message: "el id del author  debe ser un numero" })
    }

    // comprobamos que authorId existe
    const author = await AuthorModel.selectById(authorId)
    if (!author) {
        return res.status(404).json({ message: "el id del author no existe" })
    }
    req.author = author;

    next();

}

module.exports = {
    checkAuthorId
}