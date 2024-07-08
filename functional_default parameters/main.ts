// Named function with default parameters
//Note giving a default value to parametrs

function buildname(firstName:string,lastName="khan"){
    if(lastName){
        return firstName +""+ lastName;
    }else{
        return firstName
    }
}
let result = buildname("Adam") // its ok
// let result1=buildname("Adams","Bob","sun")// error too many parametrs
let result2= buildname("Adams","KHAN")
console.log(result);
console.log(result2);

// Anonymous function with default parameters

let buildName:(firstName:string,lastName? :string) =>string=function(firstName:string,lastName="Thakur"):string{
    if(lastName){
        return firstName +""+ lastName
    }else{
        return firstName
    }
}
console.log(buildName("Adams"));
console.log(buildName("Adams","thakur"));

