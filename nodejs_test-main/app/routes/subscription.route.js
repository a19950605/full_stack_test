module.exports = app => {
    const subscriptions = require("../controllers/subscription.controller.js");
    var router = require("express").Router();
    router.post("/", subscriptions.create);
    router.get("/", subscriptions.findAll);

    router.delete("/:id", subscriptions.delete);
   // router.delete("/", subscriptions.deleteAll);
    app.use('/api/subscriptions', router);
  };