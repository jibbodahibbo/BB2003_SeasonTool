
class rosterObj{

  constructor(sequence){


    this.sequence = sequence;
    this.pairs = splitSequence(sequence,2);
    this.left_field = this.getDefense().substring(0,2);
    this.center_field = this.getDefense().substring(2,4);
    this.right_field = this.getDefense().substring(4,6);
    this.third_base = this.getDefense().substring(6,8);
    this.second_base = this.getDefense().substring(8,10);
    this.first_base = this.getDefense().substring(10,12);
    this.short_stop = this.getDefense().substring(12,14);
    this.catcher = this.getDefense().substring(14,16);
    this.pitcher = this.getDefense().substring(16,18);
    this.batting_order=splitSequence(this.getOffense(),2);
    this.unknown_middle=this.getMiddleStuff().substring(0,2);
    this.team_adj=this.getMiddleStuff().substring(2,4);
    this.team_name=this.getMiddleStuff().substring(4,6);
    this.color_1=this.getMiddleStuff().substring(6,8);
    this.color_2=this.getMiddleStuff().substring(8,10);
    this.wins=this.getMiddleStuff().substring(10,12);
    this.losses=this.getMiddleStuff().substring(12,14);





  }

  getDefense(){
    var defense = this.sequence.substring(0,19);
    return defense;
  }
  getOffense(){
    var offense = this.sequence.substring(32,50);
    return offense;
  }
  getMiddleStuff(){
    var middlestuff = this.sequence.substring(18,32);
    return middlestuff;
  }
  getTeamNameStr(){
    for (var i = 0; i<team_names2.length;i++){
      if (pairToInt(this.team_name) == team_names2[i].value){
          return team_names2[i].name;

      }
    }
  }

  getTeamAdjStr(){
    for (var i = 0; i<team_names1.length;i++){
      if( pairToInt(this.team_adj) == team_names1[i].value){
          return team_names1[i].name;

      }
    }
  }

 getTeamHex1(){

var value;
  for (var i = 0; i<Object.keys(team_colors).length; i++){
        if (this.color_1==team_colors[i].value){
          return team_colors[i].hex;
        }
  }


 }

 getTeamHex2(){

 for (var i = 0; i<Object.keys(team_colors).length; i++){
       if (this.color_2==team_colors[i].value){
         if (team_colors[i].hex == "#000"){
           return "#FFF";
         }else{
         return team_colors[i].hex;
       }
       }
 }

}
}
