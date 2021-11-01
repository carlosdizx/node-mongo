exports.insertDocument = (db, document, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.insertOne(document);
};

exports.findsDocuments = (db, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.findOne({}).toArray();
};

exports.removeDocument = (db, document, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.deleteOne(document);
};

exports.updateDocument = (db, document, update, nameCollection) => {
  const collection = db.collection(nameCollection);
  return collection.updateOne(document, { $set: update }, null);
};
