//Ternary Operator 


function fun(x)
{
   
    return (x)? "passed value is true" : "passed value is false";

}

console.log(fun("string")); //truthy value
console.log(fun(null));     //falsy value