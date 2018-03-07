
var arr = [3,5,3,12,34,67,98,8];

// var sum = 0;
// for(var i = 0;i<arr.length;i++){
//     sum = sum+arr[i];
// }

// console.log('Result is: ' + sum);

var result = arr.reduce(function(a,b){
    return a+b;
});

console.log(result);