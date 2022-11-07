const numbers = [1, 2, 3, 4, 5, 6];

let sum=numbers.reduce((accumulator,curr)=>{
        accumulator=accumulator+curr;
        
         return accumulator;
});

console.log("Sum of array elements: "+sum);




const uName = "ankitjain";

let reverseString=uName.split("").reduce((accumulator,current)=>{
   return accumulator=current+accumulator;
},"");

console.log(reverseString);