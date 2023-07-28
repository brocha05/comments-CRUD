const db = require("../db");

const createComment = async (req, res, next) => {
  const { email, comment } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO comments (email, comment) VALUES ($1, $2) RETURNING *",
      [email, comment]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getComments = async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM comments");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  const { email, comment } = req.body;
  const { id } = req.params;

  try {
    const result = await db.query(
      "UPDATE comments SET email = $1, comment = $2 WHERE id = $3 RETURNING *",
      [email, comment, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM comments WHERE id = $1", [id]);
    res.json({ message: "Borrado con éxito" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createComment, getComments, updateComment, deleteComment };
