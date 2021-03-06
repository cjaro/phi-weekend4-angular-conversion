myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.onView = TaskFactory.testProperty;
  self.viewArray = TaskFactory.testArray;
  self.taskList = TaskFactory.allTasks;

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      TaskFactory.updateTasks();
      self.newTask = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

}]);
