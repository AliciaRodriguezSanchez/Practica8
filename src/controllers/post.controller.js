
const PostsModel = require("../models/posts.model")

const getAll = async (req, res) => {
    const posts = await PostsModel.selectAll();
    res.json(posts);
}

const getById = async (req, res) => {
    res.json(req.post);
}

const getByAuthorId = async (req, res) => {
    const { authorId } = req.params;
    const posts = await PostsModel.selectByAuthorId(authorId);
    if (posts.length === 0) {
        return res.status(404).json({ message: "El autor no tiene ningun post publicado actualmente" })
    }

    res.json(posts);
}

const create = async (req, res) => {
    const result = await PostsModel.insert(req.body);
    const newPost = await PostsModel.selectById(result.insertId);
    if (!newPost) {
        return res.status(404).json({ message: "No existe este post" })
    }
    res.status(201).json(newPost)
}

const update = async (req, res) => {
    const { body, params: { postId } } = req;
    const post = await PostsModel.updateById(postId, body);
    const result = await PostsModel.selectById(postId);

    res.json(result)
}

const remove = async (req, res) => {
    const { postId } = req.params;
    const result = await PostsModel.deleteById(postId);
    res.json(req.post)
}


module.exports = {
    getAll,
    getById,
    getByAuthorId,
    create,
    remove,
    update
}
