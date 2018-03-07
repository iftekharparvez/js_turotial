
// function host(){
//     console.log('This is host function');
    
//     function child(){
//         console.log('This is child function');
//     }
//     return child;
// }
// var a = host();
// a();


// function greet(msg){
//     function pret(name){
//         console.log(msg + " " + name);
//     }
//     return pret;
// }

// var a = greet('kire');
// a('mofij');
// var b = greet('jana nai');
// b('yes');



function greeting(msg){
    return function(name){
        console.log(msg + ' ' + name);
    }
}

var good = greeting('Morning');

var bad = greeting('Evening');
good('parvez');

bad('karim');