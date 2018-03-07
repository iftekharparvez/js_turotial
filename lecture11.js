

// var arr = [3, 2, 7, 1, 9, 6, 4];

// var newArr = [];
// var evenArr = [];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         newArr.push(arr[i]);
//     }
//     else{
//         evenArr.push(arr[i]);
//     }
// }

// console.log(newArr);
// console.log(evenArr);


// var arr =[3, 6, 2, 7, 8, 4, 45, 88, 56, 33];

// var odd = arr.filter(function(data){
//     return data % 2 == 1;
// });

// console.log(odd);

var arr = [3, 5, 2, 7, 9, 23, 44, 27, 12];

function myFilter(arr, callback){
    var newArr = [];
    for(var i=0;i<arr.length; i++ ){
        if(callback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

var myArr = myFilter(arr, function(element){
    return element % 2 == 1;
});

console.log('Odd number: ' + myArr);