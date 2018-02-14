# Node testing
=====

Basic node testing and learning. Nothing remotely interesting here.

01/16/18 - Lets add a router, and start setting up mvc.
01/17/18 - Should have some basic templating set up. Not sure if this is the best way. Continuing to learn more about the basics of the node system.

02/02/18 - lets add express, as that seems to already have the routing baked in. We'll use pug for view rendering, bodyParser to GET posted variables. We're going to add knex and the mysql connection.

02/06/18 - more stuff to add to the boilerplate. bodyParser doesn't handle multipart forms, like at all. so lets use express-formidible.

02/11/18 - async database calls are terrible. knex is pretty ok, but complex database transactions get cought in callback hell or endless promises. reference counting, maybe? or add more glue from npm. 

Could probably handle the db calls easier with any given backend language, but then i "wouldn't learn node the right way", according to one opinionated blog. This seems silly... 20 hours getting node to do something that it doesn't specialise in, or 10min in php. Still need to learn the node way tho...

----
Links/info used, in no particular order
* https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
* https://github.com/LeCoupa/awesome-cheatsheets/blob/master/backend/node.js
* https://codeforgeek.com/2014/09/handle-get-post-request-express-4/
* https://expressjs.com/en/guide/using-template-engines.html
* https://expressjs.com/en/starter/static-files.html
* https://stackoverflow.com/questions/15350025/express-js-single-routing-handler-for-multiple-routes-in-a-single-line/37596851
* https://pugjs.org/api/getting-started.html
* http://knexjs.org/
* https://alexdisler.com/2016/03/26/nodejs-environment-variables-elastic-beanstalk-aws/
* https://stackoverflow.com/questions/6597493/synchronous-database-queries-with-node-js

