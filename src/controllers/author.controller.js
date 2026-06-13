
const AuthorModel = require("../models/authors.model")

const getAll = async (req, res) => {
   const authors = await AuthorModel.selectAll();
   res.json(authors);
}

const getById = async (req, res) => {
   res.json(req.author);
}

const create = async (req, res) => {
   const result = await AuthorModel.insert(req.body);
   const newClient = await AuthorModel.selectById(result.insertId);
   if (!newClient) {
      return res.status(404).json({ message: "No existe este autor" })
   }
   res.status(201).json(newClient)
}

const update = async (req, res) => {
   const { body, params: { authorId } } = req;
   const author = await AuthorModel.updateById(authorId, body);
   const result = await AuthorModel.selectById(authorId);

   res.json(result)
}

const remove = async (req, res) => {
   const { authorId } = req.params;
   const result = await AuthorModel.deleteById(authorId);
   res.json(req.author)
}


module.exports = {
   getAll,
   getById,
   create,
   remove,
   update
}
