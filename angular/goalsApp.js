var goalsApp = angular.module('goalsApp', []);

// goalsApp.controller('mainController', function($scope) {
//   $scope.goals = [
//     {name:'Andy', goal: 'Patagonia'},
//     {name: 'Mike', goal: 'Norway'}
//   ];
// });
//



//This configures the routes and associates each route with a view and a controller
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/',
//             {
//                 controller: 'mainController',
//                 templateUrl: 'index.html'
//             })
//         //Define a route that has a route parameter in it (:customerID)
//         .when('/customerorders/:customerID',
//             {
//                 controller: 'CustomerOrdersController',
//                 templateUrl: '/app/partials/customerOrders.html'
//             })
//         //Define a route that has a route parameter in it (:customerID)
//         .when('/orders',
//             {
//                 controller: 'OrdersController',
//                 templateUrl: '/app/partials/orders.html'
//             })
//         .otherwise({ redirectTo: '/customers' });
// });
