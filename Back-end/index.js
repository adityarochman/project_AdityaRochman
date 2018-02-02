const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const vendorRoutes = require("./routes/vendor");
const uservendorRoutes = require("./routes/uservendor");

const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

const jwt = require("jsonwebtoken");

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(fileUpload());
app.use(express.static("public"));
app.use(passport.initialize());

passport.use("auth", new BearerStrategy((token, done) => {
    jwt.verify(token, "secretKey", (error, decoded) => {
        if(error){
            return done("User not Authorized", null);   
        } else{
            console.log(decoded)
            return done(null, decoded)
        }
    })
}));

app.post("/api/validatetoken", passport.authenticate("auth", { session: false }), (req, res) => {
    res.send(req.user);
});

app.use("/api/vendor", vendorRoutes);
app.use("/api/uservendor", uservendorRoutes);

app.listen(3002);