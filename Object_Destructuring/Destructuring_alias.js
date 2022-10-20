//Destructuring the Object and providing the alias name

let player_profile= {

    Name:"Neymar Jr",
    Age:"30",
    Position:"Winger",
    Net_Worth:"2520M",
    Club:"Paris Saint Germain",
    Speciality:"Dribbler🪄"
 
 }




let{Name:Player_name,Position:Player_Position,Speciality:Player_Skill} = player_profile;






//Instead of using the the dot operator for assigning the value of the object , we can simply use destructuring 

console.log(Player_name);
console.log(Player_Position);
console.log(Player_Skill);


