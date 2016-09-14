app.service('dataService', function() {

    this.logStuff = function() {
    console.log('service!' , data[0].name)
    }
})

var data = [
{name:'Andy', goal: 'Patagonia'},
{name: 'Mike', goal: 'Norway'}
]
