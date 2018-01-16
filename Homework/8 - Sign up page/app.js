const express = require('express');
const config = require('./config.json');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userController = require('./controller/userController');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
// app.set("view engine", "handlebars");

app.get('/', (req,res) => {
    //res.render('/public/index.html');
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/signup', (req,res) => {
    // var userName = req.body.username;
    // var email = req.body.email;
    // var data = {
    //     "username":userName,
    //     "email":email,
    // };
    userController.addUser(req.body.username, req.body.email, (err, id) => {
        if (err){
            console.log(err);
        }
        else {
            userController.findUser(req.body.username, req.body.email, (err, user) =>{
                if (err) {
                    console.log(err);
                }
                if (user){
                    res.send("User exsisted")
                }
                else {
                    res.send(`Welcome ${req.body.username}`);
                }
            });            
        }
    });
});

app.use(express.static('public'));

mongoose.connect(
    config.connectionString,{
        useMongoClient: true
    },
    (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Dtbase connect success");
        }
    }
);

app.listen(config.port, (err) => {
    if (err) {console.log(err)};
    console.log(`App is listening at port ${config.port}`);
});