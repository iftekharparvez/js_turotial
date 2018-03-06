



function base(b){
    return function(n){
        var result = 1;


        for(var i=0;i<b;i++){
            result *= n;
        }

        return result;
    }
}

var result = base(3)(5);

console.log(result);
result;
