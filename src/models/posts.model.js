// Define your model here
const db = require('../config/db')

const formatPost = (post) => ({
  id: post.id,
  title: post.title,
  description: post.description,
  category: post.category,
  author_id: post.author_id,
  author: {
    id: post.authorId,
    name: post.authorName,
    email: post.authorEmail,
    image: post.authorImage,
  },
});

const selectAll = async () => {
  const [result] = await db.query(`
    select
      posts.*,
      authors.id as authorId,
      authors.name as authorName,
      authors.email as authorEmail,
      authors.image as authorImage
    from posts
    join authors on posts.author_id = authors.id
  `);
  return result.map(formatPost);

}

const selectById = async (postId) => {
  const [result] = await db.query(`
    select
      posts.*,
      authors.id as authorId,
      authors.name as authorName,
      authors.email as authorEmail,
      authors.image as authorImage
    from posts
    join authors on posts.author_id = authors.id
    where posts.id = ?
  `, [postId]);
  return result.length > 0 ? formatPost(result[0]) : null;

}

const selectByAuthorId = async (authorId) => {
  const [result] = await db.query(`
    select
      posts.*,
      authors.id as authorId,
      authors.name as authorName,
      authors.email as authorEmail,
      authors.image as authorImage
    from posts
    join authors on posts.author_id = authors.id
    where posts.author_id = ?
  `, [authorId]);
  return result.map(formatPost);

}

const insert = async ({ title, description, category, author_id }) => {
  const [result] = await db.query(
    'INSERT INTO posts (title, description, category, author_id) VALUES (?, ?, ?, ?)',
    [title, description, category, author_id],
  );
  return result;
}

const updateById = async (postId, { title, description, category, author_id }) => {
  const [result] = await db.query(
    'update posts set title = ?, description = ?, category = ?, author_id = ? where id = ?',
    [title, description, category, author_id, postId],
  );

  return result;
}

const deleteById = async (postId) => {
  const [result] = await db.query('delete from posts where id = ?', [postId]);
  return result;
}

module.exports = {
  selectAll,
  selectById,
  selectByAuthorId,
  insert,
  deleteById,
  updateById
}
