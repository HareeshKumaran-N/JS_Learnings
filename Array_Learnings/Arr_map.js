/*
Algo
   
    without using inbuilt method, traverse the array ...while doing so 
    check if the particular element is divisibe by 2 ...if so multiple by 2 and push it to new array.
    else simply push the element in the array.
  
*/
let arr=[2,4,5,2,7,2];

let newArr=[];


//method 1.
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2===0)
    {
        newArr.push(arr[i]*2);
    }
    else
    {
        newArr.push(arr[i]);
    }
}

//method 2 using map.
//signature:- map( (item,index)   )
let mapArr=arr.map(
    (element,index)=>{
        if(element%2===0) 
        return element*2;
        
        return element;
      
    }
);

console.log("Using Map",mapArr);

