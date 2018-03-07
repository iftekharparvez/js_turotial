

 var arr = [3,6,8,4,7,12,24];
// var mapArr = [];

// for(var i = 0;i<arr.length;i++){
//     mapArr.push(arr[i] + 2);
// }

// console.log('Mapped Array: ' + mapArr);

// var data = arr.map(function(value){
//     return value + 2;
// });

// console.log(data);

function myMap(arr, callback){
    var newArr = [];

    for(var i=0;i<arr.length;i++){
       // newArr.push(callback(arr[i]));
       var data = callback(arr[i]);

       newArr.push(data);
    }

    return newArr;
}

var myArr = myMap(arr,function(value){
    return value * (5 - 2 * 3);
});

console.log(myArr);