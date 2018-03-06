

// function outer(){
//     function vitor(){
//         console.log('This is inner function');
//     }

//     console.log(vitor());
// }

// outer();

function add(a,b){
    function sum(){
        return a+b;
    }

    function sub(){
        return a-b;
    }

    function mul(){
        return a*b;
    }

    function div(){
        return a/b;
    }

    return "Addition is:"+ sum() + "\n" + "Substraction is: " + sub() + "\n" + "Multiply is " + mul()+ "\n" + "Devision is: " + div();
}

var result = add(10,5);

console.log(result);

