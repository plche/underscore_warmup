const _ = require('underscore');
const {object} = require("underscore");

const myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};
const businesses = [
    {
        name: "Coding Dojo",
        city: "Bellevue"
    },
    {
        name: "Facebook",
        city: "Mountain View"
    },
    {
        name: "Microsoft",
        city: "Redmond"
    },
    {
        name: "Expedia",
        city: "Bellevue"
    }
];

// 1. Strip the myState object into two arrays, one filled with its keys, the other with its values.
let myStateKeys = [], myStateValues = [];
_.each(myState, function (value, key) {
    myStateKeys.push(key);
    myStateValues.push(value);
});
console.log('34:myStateKeys:', myStateKeys);
console.log('35:myStateValues:', myStateValues);

// 2. Using these two new arrays, put them back together as an object to resemble the original myState object.
const myStateCopy = object(myStateKeys, myStateValues);
console.log('40:myStateCopy:', myStateCopy);

// 3. Alert each of the key - value pairs of the myState object.
// _.each(myState, function(value, key){ alert(key+': '+value); });
_.each(myState, function (value, key) {
    console.log(key + ': ' + value);
});

// 4. Return just the names of the businesses from the businesses array.
const businessNames = _.pluck(businesses, 'name');
console.log('50:businessNames:', businessNames);

// 5. Return the object containing “Microsoft”.
const bNameIsMicrosoft = _.findWhere(businesses, {name: 'Microsoft'});
console.log('54:bNameIsMicrosoft:', bNameIsMicrosoft);

// 6. Return all the businesses that are located in Bellevue in a new array.
const bCityIsBellevue = _.where(businesses, {city: 'Bellevue'});
console.log('58:bCityIsBellevue:', bCityIsBellevue);

// 7. Sort the businesses based on the city in ascending order and return the array.
const sortedBusinessCities= _.sortBy(businesses, 'city');
console.log('62:sortedBusinessCities:', sortedBusinessCities);
