goalsApp.service('dataService', function() {

    this.getStuff = function() {
      return data;
    }

    var data = [
    {name:'Andy', goal: 'Patagonia'},
    {name: 'Mike', goal: 'Norway'}
    ]

})
