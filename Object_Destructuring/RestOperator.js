//Rest Operator

let player_profile= {
    Name:"Haaland",
    Age:"22",
    Position:"Striker",
    Net_Worth:"100M",
    Club:"Manchester City",
   
 }

 let {Net_Worth,...restObject}=player_profile;
 console.table(player_profile);
 console.table(restObject);

 //new object is formed with all properties except Net_worth
 
