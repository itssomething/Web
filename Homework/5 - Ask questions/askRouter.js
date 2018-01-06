const express = require('express');
const Router = express.Router();
const fs = require('fs');

Router.get('/', (req, res)=>{
    // res.render("about");
    res.render("ask", {
        layout: "main",
    });
});
Router.post('/', (req, res) => {
    fs.readFile('./public/question.json', {encoding: 'utf-8'}, (err, data) => {
        //console.log(err);
        let word = JSON.parse(data);
        let text = req.body;
        text.id = word.length + 1;
        word.push(text);
        fs.writeFile('./public/question.json', JSON.stringify(word), (err) => {
            if (err) {console.log(err);}
        });
        res.redirect('/ask');
    });
});

// Router.get('/sub', (req, res)=>{
//     res.send({
//         a: 4,
//         b: 5
//     });
// });

// Router.post('/', (req, res)=>{
// });

module.exports = Router;