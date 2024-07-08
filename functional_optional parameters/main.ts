// Optional Parameters ?

//Named function with optioanal parameters.

function Named(firstName:string,lastName?:string):string{
if(lastName){
    return firstName +""+ lastName ;}
    else{
        return firstName
    }
}
let result=Named("Ahmed") // ok
// let result2=Named("ahmed","raza","Saba") // error too many parameters
let result3=Named("Ahmed", "Raza")
console.log(result);
console.log(result3);

// Anonymous function with optional parameters

let buildName:(firstName:string,lastName?:string)=>string= function(firstName:string,lastName?:string):string{
    if(lastName){
        return firstName+ "" + lastName;
    }else{
        return firstName
    }
}

console.log(buildName("Adams"));
console.log(buildName("Adams","Jones"));


