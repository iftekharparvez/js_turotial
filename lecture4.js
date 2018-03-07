

// function boxItem(fname, lname, gender){
//     if(gender == 'male'){
//         var data = 'You are Male and your full name: ' + fname + " " + lname;
//         return data;
//     }
//     else if(gender == 'female'){
//         var data = 'You are Female and your full name: ' + fname + " " + lname;
//         return data;
//     }
    
// }

// var result = boxItem('Iftekhar','Parvez','male');

// console.log(result);


function valueItem(){
    return {
        name: 'Iftekhar Parvez',
        profesion: 'Developer',
        age: 25,
        nat: 'bangladeshi',
        skills: ['html5','css3','javascript','php','wordpress','mysql'],
        charac: function(){
            console.log(this.name + ' is a good boy');
        }
    }
}

var result = valueItem();

console.log(result.charac());