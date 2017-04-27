var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var userCtrl = require('./controllers/users');
var router = express.Router();

router.get('/', function(req, res) {  
   res.send(req.ip);
});
app.use(router);

var user = express.Router();
user.route('/createUser')
  .post(userCtrl.addUser);
app.use(user);


app.listen(server_port, server_ip_address, function() {  
  console.log("Node server running on"+server_port+":"+server_ip_address);
});

