//requires
const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
    }
  })

//config and defaults
const port = 3001;

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
    });

//posts    
app.post('/about_posted', function (req, res) {
    res.render('about_posted', {title:'posted!', message:req.body.send_it })
});
