const express = require("express");
const UserVendor = require("../module/uservendor");
const jwt = require("jsonwebtoken");
// const http = require("http");
// const url = require("url");

const router = express.Router();

router.get("/detail/:id", (req, res) => {

    UserVendor.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    UserVendor.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/register", (req, res) => {

    let newUser = new UserVendor({
        name: req.body.name,
        namevendor: req.body.namevendor,
        address: req.body.address,
        category: req.body.category,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        since: req.body.since,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save((error) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.json(newUser);
        }
    });
})

router.post("/login", (req, res) => {

    UserVendor.findOne({ username: req.body.username, password: req.body.password }, (error, result) => {
        if (error) {
            res.status(500).json(error);

        } else if (!result) {
            res.status(404).json({ messsage: "User not found" });
        }
        else {
            const payload = {
                id: result._id,
                name: result.username
            };

            const token = jwt.sign(payload, "secretkey", { expiresIn: 1500 });
            res.json({ token: token });
        }
    })
});

module.exports = (function () {
    return router;
})();