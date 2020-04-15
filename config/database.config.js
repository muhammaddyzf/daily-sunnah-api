const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  DB: `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
}