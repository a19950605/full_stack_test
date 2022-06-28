const Subscription = require("../models/subscription.model.js");
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const subscription = new Subscription({
    title: req.body.title,
    general: req.body.general||false,
    specialist: req.body.specialist||false,
    physiotherapy: req.body.physiotherapy||false,
    extraOne: req.body.extraOne||false,
    extraTwo: req.body.extraTwo||false,
  });
  Subscription.create(subscription, (err, data) => {
    console.log('hello')
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  const title = req.query.title;
  Subscription.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
    Subscription.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found sub with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete sub with id " + req.params.id
            });
          }
        } else res.send({ message: `sub was deleted successfully!` });
      });
    
};
// Delete all  from the database.
exports.deleteAll = (req, res) => {};
