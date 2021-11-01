const assert = require("assert");

exports.insertDocument = (db, document, nameCollection, callback) => {
  const collection = db.collection(nameCollection);
  collection.insert(document, (err, result) => {
    assert.equal(err, null);
    console.log("Inserted " + result);
    callback(result);
  });
};

exports.findsDocuments = (db, nameCollection, callback) => {
  const collection = db.collection(nameCollection);
  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    callback(docs);
  });
};

exports.removeDocument = (db, document, nameCollection, callback) => {
  const collection = db.collection(nameCollection);
  collection.deleteOne(document, (err, result) => {
    assert.equal(err, null);
    console.log("Removed the document " + document);
    callback(result);
  });
};

exports.updateDocument = (db, document, update, nameCollection, callback) => {
  const collection = db.collection(nameCollection);
  collection.updateOne(document, { $set: update }, null, (err, result) => {
    assert.equal(err, null);
    console.log("The document was updated");
    callback(result);
  });
};
