const _=require('lodash');



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


 let copyObj=_.cloneDeep(player_profile);

 copyObj.Details.weight="77 kg";

 console.log("Original Object",player_profile);
 console.log("Copy Object",copyObj);