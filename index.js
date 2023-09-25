function receivesAFunction(cb){
    cb(); 
}

//returns "call from console.log"
console.log(receivesAFunction(() => console.log("call from console.log")))

function returnsANamedFunction(){
    return function add(num1){return num1}
}

//returns [Function: add]
console.log(returnsANamedFunction())


function returnsAnAnonymousFunction(){
    return () => {console.log("Got it")}
}

//return [Function (anonymous)]
console.log(returnsAnAnonymousFunction())