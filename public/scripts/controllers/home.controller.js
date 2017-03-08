myApp.controller('HomeController', ['TaskFactory', function(TaskFactory){
  var self = this;
  self.message = 'this site is neat';
  self.messageFromTheFactory = TaskFactory.testProperty;
  self.arrayFromTheFactory = TaskFactory.testArray;
}]);
