app.controller('mainController', function(dataService) {
  function init() {
    $scope.goals = dataService.logStuff()
  }
})
