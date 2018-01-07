const express = require('express');
const Router = express.Router();
const jsonfile = require('jsonfile');
const fs = require('fs');

Router.get('/', (req, res)=>{
    // res.render("about");
    res.render("question", {
        layout: "main",
    });
});

Router.get('/:id', (req, res)=>{
    console.log(req.params.id);
    let data = fs.readFileSync("./public/question.json");
    let word = JSON.parse(data);
    for( let item of word ){
        if(item.id == req.params.id){
            console.log(item.id);
            res.render("question", {layout: "main", id: item.id, text: item.text});
            break;
        }
    }      
});  

module.exports = Router;