const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/about', (req,res) => {
    res.sendFile(__dirname + "/public/about/index.html");
});

app.listen(6969, (err) => {
    if (err) {console.log(err);}; 
    console.log("App is listening at port 6969");
})