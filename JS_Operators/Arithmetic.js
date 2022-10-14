//Addition Operator
{
let num1=50;
let num2=60;

let sum=num1+num2;

console.log( `On Adding ${num1} and ${num2} :`,sum );
}

//Subtraction
{
let num1=100;
let num2=30;

let diff=num1-num2;


console.log( `On Subtraction ${num1} and ${num2} :`,diff );
}


// Multiplication
{
    let num1=10;
    let num2=3;
    
    let mul=num1*num2;
    
    
    console.log( `On Multiplying ${num1} and ${num2} :`,mul );
    }

// Division

{
    let num1=225;
    let num2=5;
    
    let quotient=num1/num2;
    
    
    console.log( `On Dividing ${num1} and ${num2} :`,quotient );
 }

 //Modulus
 {
    let num1=10;
    let num2=2;
    
    let remainder=num1%num2;
    
    
    console.log( `On using modulo of  ${num1} and ${num2}, we get remainder:`,remainder );
    }

// Increment
{
    //post increment
    let num1=10;

    
    
    
    
    
    console.log( `On post incrementing num1 :`,num1++);
    //output is 10 because the in post increment the 10 value will be changed after printing 10
    //now the value of num1 will be 11
    console.log(num1);


    //pre increment
    ++num1;

    //now the increment happens first in the memory
    console.log(num1);
      
 }

 {
    //decrement 

 let num =20;
 console.log("Post decrement: ",num--);
 console.log("Pre decrement: ",--num);



 }

 //Exponential
 {
    let num =5;
    let power=2;

    console.log(`Exponential of ${num} and ${power} is`,num**power);
 }
