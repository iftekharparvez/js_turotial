

// function student(name){
//     teacher(name);
//     teacher('developer');
// }

// function teacher(args){
//     console.log(args);    
// }
// student('iftekhar parvez');

// function hello(name, print){
//     print(name);
// }

// hello('parvez',function(name){
//     console.log('valo achi ' + name);
// });

// hello('karim', function(name){
//     console.log('tomar nam: ' + name + ' tomar length: ' + name.length);
// });



// var me = {
//     name: 'parvez',
//     age: 25,
//     pro: 'developer',
//     email: 'iftkehar@gmail.com'

// }

// function myData(person, callback){
//     console.log('Person: '+ person.name + ' tar boyos ' + person.age);  
//     if(person.age >= 18){
//         callback(person.email);
//     }
//     else{
//         console.log('you are littile');
//     }
// }

// myData(me, function(email){
//     console.log('Mail sent to '+ email );
// });


function print(data, callback1, callback2){
    console.log('Personal data: ' + data );
    callback1(data);
    callback2(data);
}

print('Parvez Islam', function(data){
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data + ' Length: ' + data.length);
},
function(data){
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
});

