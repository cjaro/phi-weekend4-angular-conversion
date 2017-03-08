myApp.factory('TaskFactory', ['$http', function($http, TaskFactory){

  var testArrayVariable = ['queso', 'bagel', 'salsa', 'carolyn'];
  testArrayVariable.pop();

  var factoryTasks = { list: [] };

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryTasks.list = response.data;
    });
  }
//public API - if not here, controller won't see it
  return{
    testProperty: 'string',
    testArray: testArrayVariable,
    allTasks: factoryTasks,
    updateTasks: getTasks
  };
}]);
