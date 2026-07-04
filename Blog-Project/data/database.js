const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: '<your-pw>'
});

module.exports = pool;


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  return client.db('blog');
}

module.exports = connectToDatabase;

MongoClient.connect('mongodb://localhost:27017');