// CRUD operation in Object.

//creating an object----------------------------------------------------------------------------------------------------------------------------------------------------

const person=new Object();

person.Name="Hareesh";
person.Age=21;
person.Moto="Never neglect an opportunity for improvement";
person.Hobby=["listening to music","gaming","cricket"];




// Reading an Object----------------------------------------------------------------------------------------------------------------------------------------------------
console.log(person.Name);
console.log(person.Age);
console.log(person.Moto);
console.log(person.Hobby);


//Updating the Array----------------------------------------------------------------------------------------------------------------------------------------------------

//I am here trying to add new hobby to my hobby property which is an array 

person.Hobby.push("Cooking");

console.log(person.Hobby);

// we can see new value is been pushed to that array .

// we can also update the object with new property as well
person.Favourite_artist="Zayn";

console.table(person);
//new object property is updated here.


// DELETE ----------------------------------------------------------------------------------------------------------------------------------------------------

delete person.Favourite_artist;
console.log(person);

//the property is been deleted in the object. 