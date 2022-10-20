


let player_profile= {
    Name:"Haaland",
    Age:"22",
    Position:"Striker",
    Net_Worth:"100M",
    Club:"Manchester City",
    Details:{
               height:"6 inch",
               weight:"65kg"
            } 
 }


 //shallow coppy

 let shallow= {...player_profile};
 console.log(shallow);

 //now its copied but the nested object's reference is still same
 shallow.Details.height="6.2 inch";
 console.log(shallow);
 console.log(player_profile);

 //value gets updated in both the Objects

 //To overcome this we can deep copy the Object;


 let deepcopy=structuredClone(player_profile);  //Works in browser

 //now lets check by updating the deepcopy obj value whether the Original Object is changed or not
 deepcopy.Details.weight="67 Kg";

 console.log(deepcopy);



 