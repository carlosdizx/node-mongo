const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);
  console.log("Connected correctly to server");

  const db = client.db(dbname);
  const collection = db.collection("dishes");

  collection.insertOne(
    { name: "Uthappizza", description: "Test" },
    (err, result) => {
      assert.equal(err, null);

      console.log("After insert:\n");
      console.log(result);

      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        console.log("Founds: \n");
        console.log(docs);

        db.dropCollection("dishes", (err, result) => {
          assert.equal(err, null);

          client.close().then(r => console.log("xd"));
        });
      });
    }
  );
});
