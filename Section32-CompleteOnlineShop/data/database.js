const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://Cluster80142:YUZLXlRab1VN@online-shop.80022.mongodb.net/myDatabase?retryWrites=true&w=majority'
  );

  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase,
  getDb
};