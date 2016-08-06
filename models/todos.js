'use strict';

var tasks = {}; // a place to store tasks by person
//obj with str keys and array values 

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  
  listPeople: function () {
    // returns an array of all people for whom tasks exist
    var nameArr = []; 
    for (var name in tasks){
      nameArr.push(name); 
    }
    return nameArr; 
  },
  
  add: function (name, task) {
    // saves a task for a given person
    if(this.listPeople().indexOf(name) === -1){
      tasks[name] = []; 
    }
    task.complete = false; 
    tasks[name].push(task); 
  },
  // etc.
  
  list: function (name){
    return tasks[name]; 
  }, 
  
  complete: function (name, index){
    tasks[name][index].complete = true; 
  }, 
  
  remove: function (name, index){
    tasks[name].splice(index,1); 
  }, 
  
  listSpecificTasks: function (name, completion){
    tasks[name].filter(function(task){
      return task.complete === completion; 
    });
  }
};




