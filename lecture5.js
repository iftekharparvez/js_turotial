

// var arr = [3,5,7,9,2,6,4];

// arr.sort();
// arr.forEach(function(a){
//     console.log(a);
// });

function data1(){
    return function(develop){
        console.log('You are a good boy and ' + develop);
    }
}

var x = data1();
x('developer');

var y = x;

y('designer');