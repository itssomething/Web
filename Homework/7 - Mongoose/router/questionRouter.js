const express = require('express');
const Router = express.Router();
const questionController = require('../controller/questionController');
const QuestionSchema = require('../model/questionModel');

Router.get('/', (req, res)=>{
    QuestionSchema.count().exec( (err, count) => {
     var random = Math.floor(Math.random() * count);
     QuestionSchema.findOne().skip(random).exec( (err, result) => {
        res.render('question', {
            question: result.question,
        });
            // console.log(result);
        });
 });
});

Router.get('/:id', (req, res)=>{
    QuestionSchema.findOne({_id:req.params.id}, (err, result) => {
        res.render('questionDetail', {
            yes: result.yes,
            no: result.no,
            question: result.question,
        });
        // console.log(result);
    });
});

Router.post('/:id', (req, res)=>{
    let id = questionController.updateAnswerQuestion(req.params.id, req.body.answer);
    if (id) res.redirect(`/question/${id}`);
});

module.exports = Router;