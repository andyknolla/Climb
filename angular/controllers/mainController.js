goalsApp.controller('mainController', function($scope, dataService) {
    $scope.goals = dataService.getStuff();
    console.log(dataService.getStuff());
})
