//Practice code 1

function delay(miliseconds:number):Promise<void>{
   return new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, miliseconds);
   })
}

// Using .then(), .catch() and .finally()
delay(1000)
.then(()=>{
    console.log('The delay is over.');
    
}).catch((error)=>{
    console.error("Something went wrong!",error);
    
}).finally(()=>{
    console.log('This is always executed.');
})

// Practice code 2

