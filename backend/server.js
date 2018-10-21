var express = require('express');
var app = express();
var messages = [{text:'some text', owner:'owner1'},{text:'changed text', owner:'owner2'},{text:'some text', owner:'owner3'}];
app.use((re, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
})
app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);