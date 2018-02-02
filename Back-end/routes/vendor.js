const express = require("express");
const Vendor = require("../module/vendor");
const http = require("http");
const url = require("url");

const router = express.Router();

router.get("/detail/:id", (req, res) => {

    Vendor.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Vendor.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/fotografer", (req, res) => {

    Vendor.find({ category: "fotografer" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/mua", (req, res) => {

    Vendor.find({ category: "mua" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/pelaminan", (req, res) => {

    Vendor.find({ category: "pelaminan" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/catering", (req, res) => {

    Vendor.find({ category: "catering" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.get("/bajupengantin", (req, res) => {

    Vendor.find({ category: "bajupengantin" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {

    if (!req.files.profile) {
        return res.status(400).send("No files were upload");
    }
    let image = req.files.profile;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/profile/" + imageName, (error) => {
        if (error) return res.status(500).send(error);

        let newObj = new Vendor({
            name: req.body.name,
            namevendor: req.body.namevendor,
            address: req.body.address,
            category: req.body.category,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            since: req.body.since,
            description: req.body.description,
            profile: "http://localhost:3002/profile/" + imageName
        });

        newObj.save((error) => {
            if (error) {
                res.statusCode(500).send(error);
            }
            else {
                res.json(newObj);
            }
        });
    })
});

router.delete("/:id", (req, res) => {

    Vendor.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json({ message: "Data deleted" })
        }
    });

});

router.put("/", (req, res) => {

    if (!req.files.profile) {
        return res.status(400).send("No files were upload");
    }
    let image = req.files.profile;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/profile/" + imageName, (error) => {
        if (error) return res.status(500).send(error);

        let newObj = {
            name: req.body.name,
            namevendor: req.body.namevendor,
            address: req.body.address,
            category: req.body.category,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            since: req.body.since,
            description: req.body.description,
            profile: "http://localhost:3002/profile/" + imageName
        };

        Vendor.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
            if (error) {
                res.statusCode(500).json(error);
            }
            else {
                res.json({ message: "Data Updated" })
            }
        });
    })
});

module.exports = (function () {
    return router;
})();