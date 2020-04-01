const configureDB = require("../config/arangoDB-config");
const db = configureDB();
const recipesCollection = db.collection("recipes");

exports.getRecipes = (req, res) => {
  recipesCollection
    .all()
    .then(response => {
      return res.status(200).json(response._result);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
};

exports.getRecipesById = (req, res) => {};

exports.addRecipe = (req, res) => {
  // TO DO : Add career values
  recipesCollection
    .save(req.body)
    .then(response => res.status(200).json(response))
    .catch(error => {
      return res.status(500).json(error);
    });
};

exports.deleteRecipe = (req, res) => {
  const key = req.params.id;
  recipesCollection
    .remove(key)
    .then(response => res.status(200).json(response))
    .catch(error => {
      return res.status(500).json(error);
    });
};

exports.updateRecipe = (req, res) => {
  let key = req.body._key;
  recipesCollection
    .update(key, req.body)
    .then(response => res.status(200).json(response))
    .catch(error => {
      return res.status(500).json(error);
    });
};
