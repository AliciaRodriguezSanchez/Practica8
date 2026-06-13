const express = require("express");
const { getAll, create, remove, update, getById } = require("../../controllers/author.controller");
const { getByAuthorId } = require("../../controllers/post.controller");
const { checkAuthorId } = require("../../middlewares/author.middleware")
const { authorSchema } = require("../../schemas/authors.schema")
const { validateSchema } = require("../../middlewares/validation.middleware")
const router = express.Router();


router.get("/", getAll);
router.get("/:authorId/posts", checkAuthorId, getByAuthorId);
router.get("/:authorId", checkAuthorId, getById);
router.post("/", validateSchema(authorSchema), create);
router.put("/:authorId", checkAuthorId, validateSchema(authorSchema), update);
router.delete("/:authorId", checkAuthorId, remove);


module.exports = router;
