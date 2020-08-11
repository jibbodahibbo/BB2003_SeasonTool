var coach_file_text = " ";
var new_coach_file_text = " ";
var coach_file_array = [];
var old_text;
var new_coach_array = [];
var roster_schedules=[];
var roster_teams=[];



//copies coach file to clipboard
function copyCoachFile(){
  var area = document.getElementById("coach_text_row");
  var text_area_data = document.createElement("textarea");
  data = new_coach_array.join("\r\n");
  text_area_data.value = data;
  area.appendChild(text_area_data);
  text_area_data.focus();
  text_area_data.select();
  document.execCommand('copy')
  text_area_data.parentNode.removeChild(text_area_data);
  document.getElementById('coach_text_row').focus();

  }
//submits the season3 file
function submitS3CoachFile(){
  coach_file_text = document.getElementById("coachfiletext");
  coach_file_text.value = season3coachfile;
  submitCoachFile();
}

///populates all of the forms
function populateForm(){

  populateSchedulesForms();
  populateRostersForms();
  populateOptionsFromList(fields,"fieldnum_form");
  populateOptionsFromList(team_names1,"teamname1_form");
  populateOptionsFromList(team_names2,"teamname2_form");

  for (t=0; t<24;t++){
    populateOptionsFromList(team_names1,"roster_adj_form"+t);
    populateOptionsFromList(team_names2,"roster_name_form"+t);
    populateOptionsFromList(team_colors,"roster_color1_form"+t);
    populateOptionsFromList(team_colors,"roster_color2_form"+t);
  }
}

//populates the player options in the forms
function populatePlayerOptions(form_id){
  for(var t = 0; t<24; t++){
    for (var i = 0; i<Object.keys(Players).length; i++){
    var o = document.createElement('option');
    var pair = intToPair(i);
    o.text = Players[pair].Name;
    o.value = i;
    document.getElementById(form_id+t).appendChild(o);
    }
  }
}

//creates the HTML forms for rosters
function populateRostersForms(){
  for (var i=0; i<24; i++){
    var b = document.createElement('li');
    b.setAttribute("id","roster_link"+i);
    var rost_link = "<a class='nav-link' data-toggle='tab' href='#rmenu" +i+ "'>"+i+ "</a>";
    b.innerHTML = rost_link;
    document.getElementById("roster_links").appendChild(b);

    var a = document.createElement('div');
    a.setAttribute("class","tab-pane fade in");
    a.setAttribute("id","rmenu"+i);
    document.getElementById("roster_tabs").appendChild(a);
    var rost_forms = document.createElement('div');
    var rost_html = get_team_info_forms(i);

    rost_forms.innerHTML = rost_html;
    document.getElementById("rmenu"+i).appendChild(rost_forms);


    }
}

///creates the HTML forms for Schedules
function populateSchedulesForms(){
  for (var i = 0; i<24 ; i ++){
    var a = document.createElement('div');
    a.setAttribute("class","tab-pane fade in");
    a.setAttribute("id","menu"+i);
    document.getElementById("schedules_tabs").appendChild(a);
              for (var j = 0; j<14; j++){
                  var sched_forms = document.createElement('div');
                  var sch_html = [
                                  "<h6>Week "+(j+1)+"</h6>",
                                  "<div class='col-md-12 d-flex align-items-baseline'>",
                                  "<div class='form-group'>",
                                  "<label for='opponent_form'>Opponent</label>",
                                  "<select class='form-control' id='opponent_form" + j+"-"+i+"'>",
                                  "</select>",
                                  "</div>",
                                  "<div class='form-group'>",
                                  "<label for='is_played_form'>Is Played?</label>",
                                  "<input type='text' maxlength='1' size='1' class='form-control' id='is_played_form" + j+"-"+i+"' placeholder='0'>",
                                  "</div>",
                                  "<div class='form-group'>",
                                  "<label for='this_score_form'>Roster "+i+" Score</label>",
                                  "<input type='text' maxlength='3' size='3' class='form-control' id='this_score_form" + j+"-"+i+"' placeholder='0'>",
                                  "</div>",
                                  "<div class='form-group'>",
                                  "<label for='other_team_score_form'>Opp Score</label>",
                                  "<input type='text' maxlength='3' size='3' class='form-control' id='other_team_score_form" + j+"-"+i+"' placeholder='0'>",
                                  "</div>",
                                  "<div class='form-group'>",
                                  "<label for='is_home_form'>Home?</label>",
                                  "<input type='text' maxlength='1' size='1' class='form-control' id='is_home_form" + j+"-"+i+"' placeholder='0'>",
                                  "</div>",
                                  "</div>"
                                  ].join("");
                  sched_forms.innerHTML = sch_html;
                  document.getElementById("menu"+i).appendChild(sched_forms);
                }

    var b = document.createElement('li');
    b.setAttribute("id","schedule_link"+i);
    var sch_link = "<a class='nav-link' data-toggle='tab' href='#menu" +i+ "'>"+i+ "</a>";
    b.innerHTML = sch_link;
    document.getElementById("schedule_links").appendChild(b);

    }
}

///Creates options for a list
function populateOptionsFromList(list,formid){
  for (var i = 0; i<list.length; i++){
  var o = document.createElement('option');
  o.text = list[i].name;
  o.value = list[i].value;
  document.getElementById(formid).appendChild(o);
  }
}

///Generates the coach file from all update functions
function generateCoachFile(){
  ///0 [general]
  updateLine(1,"#gamecomplete_form");
  updateLine(2,"#gamenum_form");
  updateLine(3,"#fieldnum_form");
  updateLine(4,"#inningsnum_form");
  updateLine(5,"#skillsnum_form");
  updateLine(6,"#batcircle_form");
  updateLine(7,"#pitchx_form");
  updateLine(8,"#noerrors_form");
  updateLine(9,"#coachname_form");
  updateLine(10,"#over_form");
  updateLine(11,"#glorious_form");


      var o=0;

      if (coach_file_array[12].split("=")[0]=="SavedVersion"){
        updateLine(12,"#options_form")
         o+=1;
      }

      if (coach_file_array[12+o].split("=")[0]=="options"){
        updateLine(12,"#options_form")
        o+=1;
      }

  ///12 [player]
  updateLine(13+o,"#division_form");
  updateLine(14+o,"#teamname1_form");
  updateLine(15+o,"#teamname2_form");
  updateLine(16+o,"#teamcolor1_form");
  updateLine(17+o,"#teamcolor2_form");
  ///18 [season]
  updateSchedules(19+o);
  updateTeamInfo(44+o);



  var myNode = document.getElementById("coach_text_show");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

    for(var i = 0; i < coach_file_array.length; i++){
      var a = document.createElement('span');
      a.setAttribute('id', 'cft_code'+ i);
      a.setAttribute('class', 'cft_code');
      var node = document.createTextNode(new_coach_array[i]);
      a.appendChild(node);
      document.getElementById("coach_text_show").appendChild(a);
      document.getElementById("coach_text_show").appendChild(a);
      a.appendChild(document.createElement('br'));
    }

}

///updates a simple line in the coach file from a form
function updateLine(num,str){
  value = new_coach_array[num].split("=");
  new_coach_array[num]= value[0]+"="+$(str)[0].value;
 }

///updates the schedules from the schedule forms
function updateSchedules(num){


  for (var r = 0; r<24; r++){
  var newline="";
  for (var w = 0; w<14; w++){
    newline+= intToPair($("#opponent_form"+w+"-"+r)[0].value);
    newline+= intToPair(roster_schedules[r].getMystery(w));
    newline+= intToPair($("#is_played_form"+w+"-"+r)[0].value);
    newline+= intToPair($("#this_score_form"+w+"-"+r)[0].value);
    newline+= intToPair($("#other_team_score_form"+w+"-"+r)[0].value);
    newline+= intToPair(roster_schedules[r].getMystery2(w));
    newline+= intToPair($("#is_home_form"+w+"-"+r)[0].value);
  }
    newline+= "AAAAAAAAAAAAAAAA";
  value = new_coach_array[num+r].split("=");
  new_coach_array[num+r]= value[0]+"="+newline;
  }

  }

///updates the rosters from the roster forms
//TODO match up the middle lines with forms
function updateTeamInfo(num){

    for (var r = 0; r<24; r++){
      var offense=roster_teams[r].getOffense();
      var defense=roster_teams[r].getDefense();


    var midline="";
    midline+=roster_teams[r].unknown_middle;
    midline+=intToPair($("#roster_adj_form"+r.toString())[0].value);
    midline+=intToPair($("#roster_name_form"+r.toString())[0].value);
    midline+=$("#roster_color1_form"+r.toString())[0].value;
    midline+=$("#roster_color2_form"+r.toString())[0].value;
    midline+=intToPair($("#roster_wins_form"+r.toString())[0].value);
    midline+=intToPair($("#roster_losses_form"+r.toString())[0].value);

    console.log(midline);
    value = new_coach_array[num+r].split("=");
    new_coach_array[num+r]= value[0]+"="+defense+midline+offense;
    }


}

///submits text area
function submitCoachFile(){
  coach_file_text = document.getElementById("coachfiletext").value;
  coach_file_array =  $("#coachfiletext").val().split('\n');
  new_coach_array =  $("#coachfiletext").val().split('\n');
  document.getElementById("coach_submission").style.display = "none";
  uploadCoachFile();
}

///grabs all coach file and autofills forms
function uploadCoachFile(){
  var myNode = document.getElementById("coach_text_show");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }

    for(var i = 0; i < coach_file_array.length; i++){
      var a = document.createElement('span');
      a.setAttribute('id', 'cft_code'+ i);
      a.setAttribute('class', 'cft_code');
      var node = document.createTextNode(coach_file_array[i]);
      a.appendChild(node);
      document.getElementById("coach_text_show").appendChild(a);
      document.getElementById("coach_text_show").appendChild(a);
      a.appendChild(document.createElement('br'));
    }
    ///0 [general]
    uploadSelection(1,"#gamecomplete_form option");
    uploadInput(2,"#gamenum_form");
    uploadSelection(3,"#fieldnum_form option");
    uploadInput(4,"#inningsnum_form");
    uploadSelection(5,"#skillsnum_form option");
    uploadSelection(6,"#batcircle_form option");
    uploadSelection(7,"#pitchx_form option");
    uploadSelection(8,"#noerrors_form option");
    uploadInput(9,"#coachname_form");
    uploadSelection(10,"#over_form option");
    uploadSelection(11,"#glorious_form option")

    var o=0;

    if (coach_file_array[12].split("=")[0]=="SavedVersion"){
      uploadInput(12,"#options_form")
       o+=1;
    }

    if (coach_file_array[12+o].split("=")[0]=="options"){
      uploadInput(12,"#options_form")
      o+=1;
    }

    ///12 [player]
    uploadInput(13+o,"#division_form");
    uploadSelection(14+o,"#teamname1_form option");
    uploadSelection(15+o,"#teamname2_form option");
    uploadInput(16+o,"#teamcolor1_form");
    uploadInput(17+o,"#teamcolor2_form");
    ///18 [season]
    uploadSchedules(19+o);
    /// rosters start at 44
    uploadTeamInfo(44+o);
    uploadDivisions();

}

///uploads to a simple input to forms
function uploadInput(rownum,id){
  var num = coach_file_array[rownum].split("=");
  var val = num[num.length-1];
  $(id)[0].placeholder = val.toString();
  $(id)[0].value = val.toString();
}

function uploadDivisions(){

    var table_divs = document.getElementsByClassName("divisions_name");


    for (var d = 0; d < table_divs.length; d++) {
      id_tr= document.createElement('td');
      name_tr= document.createElement('td');
      num_tr= document.createElement('td');
      num_tr.innerHTML = d;
      id_tr.innerHTML = roster_teams[d].team_name;
      name_tr.innerHTML = roster_teams[d].getTeamAdjStr() +" " +roster_teams[d].getTeamNameStr();
      table_divs[d].appendChild(num_tr);
      table_divs[d].appendChild(id_tr);
      table_divs[d].appendChild(name_tr);
  }
}

///uploads to a simple selection to forms
function uploadSelection(rownum,id){
  var num = coach_file_array[rownum].split("=");
  var val = num[1];
  $(id).each(function() {
      if (this.value == val) {
        this.selected = true;
      }else{
        this.selected = false;
      }
    });

}


function uploadSelectionFromValue(val,id){
    val = pairToInt(val);
    $(id).each(function() {
        if (this.value == val) {
          this.selected = true;
        }else{
          this.selected = false;
        }
      });
}


function uploadSelectionFromString(val,id){
  $(id).each(function() {
      if (this.value == val) {
        this.selected = true;
      }else{
        this.selected = false;
      }
    });
  }


function uploadSelectionFromPair(val,id){
    $(id).each(function() {
        if (this.value == val) {
          this.selected = true;
        }else{
          this.selected = false;
        }
      });
}

///uploads schedules to forms
function uploadSchedules(rownum){

  ///instantiates all schedule objects
  var rs=[];
  for (var rr=0; rr<24; rr++){
    var sequence = coach_file_array[rownum+rr].split("=")[1];
    rs.push(new scheduleObj(sequence));
  }
  roster_schedules=rs;

  //Updates all schedule forms
  for (var r = 0; r<24; r++ ){
  for (var w = 0; w<14; w++){
    var sched_obj = roster_schedules[r];
    var num = coach_file_array[rownum].split("=");

    populateOptionsFromList(team_names2,"opponent_form"+w+"-"+r);
    $("#opponent_form"+w+"-"+r)[0].value = sched_obj.getOpponent(w);

    $("#is_played_form"+w+"-"+r)[0].placeholder = sched_obj.IsGamePlayed(w);
    $("#is_played_form"+w+"-"+r)[0].value = sched_obj.IsGamePlayed(w);

    $("#this_score_form"+w+"-"+r)[0].placeholder = sched_obj.getThisTeamScore(w);
    $("#this_score_form"+w+"-"+r)[0].value = sched_obj.getThisTeamScore(w);

    $("#other_team_score_form"+w+"-"+r)[0].placeholder = sched_obj.getOtherTeamScore(w);
    $("#other_team_score_form"+w+"-"+r)[0].value = sched_obj.getOtherTeamScore(w);

    $("#is_home_form"+w+"-"+r)[0].placeholder = sched_obj.isHomeGame(w);
    $("#is_home_form"+w+"-"+r)[0].value = sched_obj.isHomeGame(w);

  }}

}

///uploads Rosters to forms
function uploadTeamInfo(rownum){
  var rt=[];
  for (var r=0; r<24; r++){
    var sequence = coach_file_array[rownum+r].split("=")[1];
    rt.push(new rosterObj(sequence));
  }
  roster_teams=rt;

  for (var i=0; i<24; i++){

      uploadSelectionFromValue(roster_teams[i].team_adj, "#roster_adj_form"+i +" option" );
      uploadSelectionFromValue(roster_teams[i].team_name, "#roster_name_form"+i +" option" );
      uploadSelectionFromPair(roster_teams[i].color_1, "#roster_color1_form"+i +" option" );
      uploadSelectionFromPair(roster_teams[i].color_2, "#roster_color2_form"+i +" option" );
      $("#roster_wins_form"+i)[0].placeholder = pairToInt(roster_teams[i].wins);
      $("#roster_wins_form"+i)[0].value = pairToInt(roster_teams[i].wins);
      $("#roster_losses_form"+i)[0].placeholder = pairToInt(roster_teams[i].losses);
      $("#roster_losses_form"+i)[0].value = pairToInt(roster_teams[i].losses);
  }
}

/// helps upload rosters based on fielding position/ Batting order
function uploadRosterSpot(pos,id){
  var int_pos = pairToInt(pos);
  $(id).each(function() {
      if (this.value == int_pos) {
        this.selected = true;
      }else{
        this.selected = false;
      }
    });
}
