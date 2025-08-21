const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const mongoUrl =
  "mongodb+srv://rekha:SoftEng22%4022@cluster0.ugcugtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(mongoUrl)
    .then((client) => {
      _db = client.connect("roomly");
      callback(client);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error(
      "mongo database not connected {database.js getdb function}"
    );
  }
  return _db;
};

module.exports = mongoConnect;

module.getDb = getDb;
