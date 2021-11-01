const assert = require("assert");

exports.insertDocument = (db, document, nameCollection, callback) => {
  const collection = db.collection(nameCollection);
  collection.insert(document, (err, result) => {
    assert.equal(err, null);
    console.log("Inserted " + result);
    callback(result);
  });
};
