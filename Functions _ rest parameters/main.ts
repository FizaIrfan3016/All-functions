// Rest parameters

function buildName(firstName:string,...restOfname:string[]){
  return firstName + "" + restOfname.join("")
}

let employeName=buildName("John","Raza","Bilal","Simra","Maheen")
console.log(employeName)

//Anonymous function type with rest parameters

let buildname:(fname:string,...rest:string[])=>string=function(fname:string,...rest:string[]){
    return fname+ ""+ rest.join("")
}

console.log(buildName("joseph","Maheen","khan","noor"));
