

// array sorting 

// var data = [04, 07 ,11 ,9,22,43,65,54,87,99,48,55];
// data.sort(function(a, b){
//     return a-b;
// });
// console.log(data);

var people = [
    {
        name: 'parvez',
        pro: 'developer',
        age: 25
    },
    {
        name: 'karim',
        pro: 'farmer',
        age: 28
    },
    {
        name: 'jolil',
        pro: 'master',
        age: 30
    },
    {
        name: 'romgtpm',
        pro: 'student',
        age: 35
    }
];

// people.sort(function(a, b){
//     return b.age - a.age;
// });

people.sort(function(a, b){
    if(a.name > b.name ){
        return 1;
    }
    else if(a.name < b.name){
        return -1;
    }
    else{
        return 0;
    }
});


console.log(people);
