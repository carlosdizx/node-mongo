const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboperations = require("./operations");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);
  console.log("Connected correctly to server");

  const db = client.db(dbname);
  dboperations.insertDocument(
    db,
    { name: "Vadonut", description: "Test" },
    "dishes",
    (result) => {
      console.log(result);

      dboperations.findsDocuments(db, "dishes", (docs) => {
        console.log(docs);

        dboperations.updateDocument(
          db,
          { name: "Vadonut" },
          { description: "Updated test" },
          "dishes",
          (result) => {
            console.log(result);

              dboperations.findsDocuments(db, "dishes", (docs) => {
                  console.log(docs);

              db.dropCollection("dishes", (err, result) => {
                assert.equal(err, null);
                console.log(
                  result
                    ? "The collection was removed successfully"
                    : "The collection is not removed"
                );
                client.close();
              });
            });
            /**
            dboperations.removeDocument(
              db,
              { name: "Vadonut" },
              "dishes",
              (result) => {
                console.log("The document was removed " + result);
              }
            );
            */
          }
        );
      });
    }
  );
});
