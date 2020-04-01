// let db = require('arangojs')();
const { database } = require("../config");
const { collectionNames } = require("../constants/recipe-collection");

let Database = require("../node_modules/arangojs/lib").Database;

module.exports = function() {
  let db = new Database(database.url);
  let recipeDatabase = database.name;

  db.useBasicAuth(database.username, database.password);

  db.listDatabases()
    .then(dbName => {
      if (dbName.indexOf(recipeDatabase) > -1) {
        db.useDatabase(recipeDatabase);
      } else {
        db.createDatabase(recipeDatabase).then(
          () => console.log("Database created"),
          err => console.error("Failed to create database:", err)
        );
      }
    })
    .then(() => {
      db.get().then(
        () => console.log("Using database " + recipeDatabase),
        error => console.error("Error connecting to database: " + error)
      );
      // Create all the collections required!
      createAllCollections(db);
    });

  return db;
};

//Check and create all database collections
createAllCollections = db => {
  const recipeCollection = db.collection(collectionNames.RECIPE_COLLECTION);
  recipeCollection.get().then(
    response => {
      if (response.code == 200) {
        console.log("Recipe colection already exists");
      }
    },
    error => {
      if (error.code == 404) {
        recipeCollection
          .create()
          .then(() => console.log("Recipe Collection Created!!")),
          err => console.log(err);
      }
    }
  );
};
