
// load all the application enviornment variables
require('dotenv').config({ path: '../../.env' });

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);