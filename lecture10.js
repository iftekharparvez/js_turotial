

var arr = [5, 9, 1, 2, 3, 4, 5];

var name = ['rahim','karim','jalil','samim'];

// arr.forEach(function(element, index){
//     console.log('Element is = ' + element + ' ' + 'Index = ' + index + ' ' + 'array = ' + arr);
// });


function loop(arr, callback, callback2){
    for(i=0;i<arr.length;i++){
        callback(arr[i]) + callback2(name[i]);
    }
}

loop(arr, function(element){
    console.log('Element is: ' + element);
},
function(data, i){
    console.log('Name is: ' + data);
});