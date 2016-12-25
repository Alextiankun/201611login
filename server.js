var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    app = express();
app.use(express.static(path.resolve('public')));
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx' 
}));
var user = require('./routes/user');

app.use('/user',user);

app.listen(9090);