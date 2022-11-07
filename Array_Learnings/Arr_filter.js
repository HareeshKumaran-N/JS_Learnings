let arr=[10,2,3,4,5,6,6,33,1,5,5,5,66];
//eliminate number which are not div by 3.

let newArr=arr.filter((item)=>
   { return ((item%3==0 && item%5==0) || false);  }
);
console.log(newArr);

