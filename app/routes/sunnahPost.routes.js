module.exports = (app) => {
  const sunnahPosts = require('../controllers/sunnahPost.controller');

  // Create Operation
  app.post('/sunnah-posts', sunnahPosts.create);
}