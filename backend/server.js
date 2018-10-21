var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [{text:'some text', owner:'owner1'},{text:'changed text', owner:'owner2'},{text:'some text', owner:'owner3'}];
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
})
app.get('/messages', (req, res) => {
    res.json(messages);
})

app.post('/messages',(req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(1234);