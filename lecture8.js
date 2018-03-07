// javascript closer


// var name = "Iftekhar Parvez";

// function data(){
//     console.log('Your name: ' + name);
// }

// // console.dir(data);

// data();


function greeting(msg){
    return function(name){
        console.log(msg + ' ' + name);
    }
}

var good = greeting('Morning');
good('parvez');