exports.insertDocument = (db, document, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.insertOne(document);
};

exports.findDocuments = (db, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.find({}).toArray();
};

exports.removeDocument = (db, document, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.deleteOne(document);
};

exports.updateDocument = (db, document, update, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.updateOne(document, { $set: update }, null);
};
