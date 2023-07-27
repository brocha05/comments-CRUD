const { getComments, createComment, updateComment, deleteComment } = require("../controllers/test.controller");
const { Router } = require("express");

const router = Router();

router.get("/comments", getComments);
router.post("/comment", createComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;
