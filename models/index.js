const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id'
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
  // cascade adds ON DELETE CASCADE rule to your database which specifies that the child data gets deleted when the parent data is deleted.
  onDelete: "cascade"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "cascade"
})
module.exports = { User, Post, Comment };
