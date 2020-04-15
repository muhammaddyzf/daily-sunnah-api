const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Sunnah Post
const SunnahPostSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  collection: 'sunnah_posts'
});

module.exports = mongoose.model('SunnahPost', SunnahPostSchema);