const express = require('express');
const Router = express.Router();
const questionController = require('../controller/questionController');

Router.get('/', (req, res)=>{
    console.log(req.query.question);
    res.render("ask");
});


Router.post('/', (req, res)=>{
    questionController.addQuestion(req.body.question, (err, id) => {
        if (id) {
            res.redirect(`/question/${id}`);
        } else {
            console.log("Error");
        }
    });   
});

module.exports = Router;