let player_profile= {
    Name:"Haaland",
    Age:"22",
    Position:"Striker",
    Net_Worth:"100M",
    Club:"Manchester City",
 
 }
 let obj2=
 {
  country:"Norway",
  
 }


//simplest way is to use ...spread Operators.

 let MergedObj={...player_profile,...obj2};


 //we can also use assign method for merging two objects.

 let MergedObj2={}
 Object.assign(MergedObj2,player_profile,obj2);
 console.log(MergedObj);
 console.log(MergedObj2);



 