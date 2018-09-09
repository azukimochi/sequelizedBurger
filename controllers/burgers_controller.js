// Requiring the models and express
var db = require("../models");
var express = require("express");
var router = express.Router();

// GET request to get all the burgers in the table 
router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (result) {
        var data = result;
        res.render("index", { burgers: data });
    });
});

// Default GET request if the route doesn't exist. 
router.get("*", function (req, res) {
    db.Burger.findAll({}).then(function (result) {
        var data = result;
        res.render("index", { burgers: data });
    });
});

// POST request to add a new burger to the table 
router.post("/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (result) {
        console.log("A new burger has been added!");
        res.status(200).end();
    }).catch(function (err) {
        res.json(err);
    });
});

// PUT request to update the devoured boolean for a burger to show it's been eaten
router.put("/devour", function (req, res) {
    db.Burger.update({
        devoured: true
    }, {
            where: {
                id: req.body.id
            }
        }).then(function (result) {
            console.log(`The burger with the ID of ${req.body.id} has been devoured!`);
            res.status(200).end();
        }).catch(function (err) {
            res.json(err);
        });
});

module.exports = router;

