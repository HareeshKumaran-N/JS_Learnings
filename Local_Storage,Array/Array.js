// CRUD Operations using Array methods

let players=['messi','Ronaldo','neymar','kaka','zidane','xavi','iniesta','Maldini','Maradona'];


/*-------------------------------------------------------------------------------------------------------------------------------------------*/

//looping through the array.
//to access the array item.
for(let i=0;i<players.length;i++)
{
    console.log(players[i]);
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
// pop() and push methods


players.pop(); //removes the last element of the array.
console.table( players);




players.push("Zlatan");
console.table(players);   



//join method:- joins the entire array into a string with given arguement

console.log("Join method " ,players.join(" ⚽ "));


/*-------------------------------------------------------------------------------------------------------------------------------------------*/

//shift method in array removes the first element of the array

players.shift();
console.table(players);

//after removing the first element it shifts all the element to left



// unshift method is used to add an element to the beginning of the array

players.unshift("messi");
console.table(players);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/


// slice method 
console.log("Slice Method");
 let slicedArr=players.slice("2");
 console.table(slicedArr); 
//it does not overwrite the arr, instead it returns new modified array.

/*-------------------------------------------------------------------------------------------------------------------------------------------*/


 //splice method
 console.log( "Splice Method" );
 players.splice(0,2)
 console.table(players);

 //here the splice method overwrites the array by deleting the items
//we can also add the items with help of the splice method 


players.splice(0,3,"new player","new player2","new player3");
console.table(players);