"use strict";

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/1', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/LyVbpz');
});
app.get('/2', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/zwGVMm');
});
app.get('/3', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/MmaPEY');
});
app.get('/4', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/dWMpqy');
});
app.get('/5', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/bWebxK');
});
app.get('/6', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/Wjxdev');
});
app.get('/7', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/RVRvmg');
});
app.get('/8', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/aWZMym');
});
app.get('/9', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/GmjNqo');
});
app.get('/10', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/wdzbpJ');
});
app.get('/11', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/RVoOxY');
});
app.get('/12', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/aWJZQo');
});
app.get('/13', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/BRRayj');
});
app.get('/14', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/rmmjoQ');
});
app.get('/15', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/JNNWRd');
});
app.get('/16', function (req, res) {
    res.redirect(301, 'http://codepen.io/inkognitoo/pen/RVgRNd');
});


app.get('/17', function (req, res) {
    res.send('#100днейкода');
});

app.get('/18', function (req, res) {
    res.render('pages/18/index');
});

let port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});