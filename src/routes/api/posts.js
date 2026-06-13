const express = require("express");
const { getAll, create, remove, update, getById } = require("../../controllers/post.controller");
const { checkPostId, checkPostAuthorId } = require("../../middlewares/post.middleware");
const { postSchema } = require("../../schemas/post.schema");
const { validateSchema } = require("../../middlewares/validation.middleware");
const router = express.Router();


router.get("/", getAll);
router.get("/:postId", checkPostId, getById);
router.post("/", validateSchema(postSchema), checkPostAuthorId, create);
router.put("/:postId", checkPostId, validateSchema(postSchema), checkPostAuthorId, update);
router.delete("/:postId", checkPostId, remove);

module.exports = router;
