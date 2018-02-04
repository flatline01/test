//requires
const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST || '127.0.0.1',
      user : process.env.DB_USER || 'root',
      password : process.env.DB_PASSWORD || 'root',
      database : process.env.DB_DATABASE || 'test'
    }
  });
var SqlString = require('sqlstring');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
    console.log("Dev Server")
}

//config and defaults
const port = process.env.PORT || 3001;

//app settings
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.listen(port, 
    () => console.log('    Listening on port ' + port+' \n    CNTL+c to stop.')
);
app.use(bodyParser.urlencoded({ extended: false }));

//routes
//gets
app.get('/', (req, res) => res.render('home'))
    .get(['/about', '/about_posted'], function (req, res) {
        res.render('about', { title: 'Hey', message: 'Hello there!' })
        console.log(req.url)
    })
    .get("/users",function(req,res){
        knex('user_signup').select("*").from("user_signup")
        .then(function(users){
            console.log("got " + users);
            res.render('users', {title:'users', signedup_users:users})
        })
        .catch(function(error) {
            console.error("Error! " + error)
        });

    })
    

//posts    
app.post('/about_posted', function (req, res) {
    knex('user_signup').insert({user_signup_email:req.body.send_it})
    .then(function(){
        console.log("added " + req.body.send_it);
        res.render('about_posted', {title:'posted!', message:req.body })
    })
    .catch(function(error) {
        console.error("Error! " + error)
    });
    
});

