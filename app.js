const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const request = require("request");
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

let api = "https://reqres.in/api/";

app.get('/api/list-users/:page',(req,res)=>{
    request(api + 'users?page=' + req.params.page, (error,response, body)=>{
        if(error){
            res.send(error);
            return;
        }
        res.send(JSON.parse(body));
    });
});

app.get('/api/user/:id',(req,res)=>{
    request(api + 'users/' + req.params.id,(error,response, body)=>{
        if(error){
            res.send(error);
            return;
        }
        res.send(JSON.parse(body));
    });
})

app.use(express.static(__dirname + '/dist/frontcubit'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/frontcubit/index.html'));
});
app.listen(3000);
console.log("server corriendo por el puerto 3000");