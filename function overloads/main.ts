// Overload signatures

function makeDate(timeStamp:number):Date;
function makeDate(m:number,d:number,y:number):Date;
function makeDate(mOrTimestamp:number,d?:number,y?:number):Date{
    if (d !== undefined && y !== undefined){
        return new Date(y,mOrTimestamp,d)
    }else{
        return new Date(mOrTimestamp)
    }

}

const d1 = makeDate(123456);
const d2 = makeDate(5,5,5);
const d3 = makeDate(13,3,5);
console.log(d1);
console.log(d2);
console.log(d3);


// Declaring this in a function

const user ={
    id:1234,

    admin:false,
    becomeAdmin : function(){
        this.admin=true
    } 
}
console.log(user.admin);
console.log(user.becomeAdmin);
console.log(user.id);


// Overloads give us typechecked calls

function add(arg1:string,arg2:string):string; //option1
function add(arg1:number,arg2:number):number; //option2
function add(arg1:boolean,arg2:boolean):boolean; //option3

function add(arg1:any,arg2:any):any{
    return arg1 + arg2
}

console.log(add("Hello","World")); //output HelloWorld
console.log(add(1,2));             // output 3
console.log(add(false,true));      // output 1


