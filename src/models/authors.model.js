const db = require('../config/db')

const selectAll = async () => {
  const [result] = await db.query('select * from authors');
  return result;

}

const selectById = async (authorId) => {
  const [result] = await db.query('select * from authors where id = ?', [authorId]);
  return result.length > 0 ? result[0] : null;

}

const insert = async ({ name, email, image }) => {
  const [result] = await db.query(
    'INSERT INTO authors (name, email, image) VALUES (?, ?, ?)',
    [name, email, image],
  );
  return result;
}

const updateById = async (authorId, { name, email, image }) => {
  const [result] = await db.query(
    'update authors set name = ?, email = ?, image = ? where id = ?',
    [name, email, image, authorId],
  );

  return result;
}

const deleteById = async (authorId) => {
  const [result] = await db.query('delete from authors where id = ?', [authorId]);
  return result;
}

module.exports = {
  selectAll,
  selectById,
  insert,
  deleteById,
  updateById
}
