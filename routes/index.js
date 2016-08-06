'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;
var Todos = require('../models/todos');

// write your routes here. Feel free to split into multiple files if you like.

router.get('/users', function(req, res, next){
    res.send(Todos.listPeople()); 
}); 

router.get('/users/:name', function (req, res, next){
    if(Todos.listPeople().indexOf(req.params.name) === -1){
        res.sendStatus(404); 
    }
    res.send(Todos.list(req.params.name)); 
}); 

router.post('/users/:name', function (req, res, next){
    for(var field in res.body){
        if(field !== 'content' || field !== 'complete'){
            res.sendStatus(400); 
        }
    }

    console.log(req.body);  
    // Todos.add(req.params.name, req.body); 
    // res.sendStatus(201); 
    // res.send(req.body);
}); 

router.get('/users/:name?status=complete', function (req, res, next){
//     console.log(Todos.list(req.params.name));
// }); 
    var completion = true; 
    res.send(Todos.listSpecificTasks(req.params.name, completion)); 
}); 

router.get('/users/:name?status=active', function (req, res, next){
    var completion = false; 
    console.log(Todos.listSpecificTasks(req.params.name, completion)); 
    // res.send(Todos.listSpecificTasks(req.params.name, completion)); 
}); 


router.put('/users/:name/:index', function (req, res, next){
    Todos.complete(req.params.name, req.params.index); 
}); 

router.delete('/users/:name/:index', function (req, res, next){
    Todos.remove(req.params.name, req.params.index);
}); 

