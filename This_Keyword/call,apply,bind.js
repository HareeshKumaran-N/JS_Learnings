let name={
     firstName:"Hareesh",
     lastName:"Kumaran",
   
};

function printfullName(Nationality)
{
   console.log(this.firstName+" "+this.lastName+" "+Nationality);
}


let name2={
    firstName:"Virat",
    lastName:"Kohli",
   
};


//call method.

console.log("call Method:");
printfullName.call(name2,"Australia") ;

printfullName.call(name,"India") ;

//apply method.

console.log("Apply Method:");
printfullName.apply(name2,["Australia"]) ;

printfullName.apply(name,["India"]) ;


//bind method
let printDetail=printfullName.bind(name,Spain);
console.log(printDetail);//bind method returns the method and later it can be invoked.
