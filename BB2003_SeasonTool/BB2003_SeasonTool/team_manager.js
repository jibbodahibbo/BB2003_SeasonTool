var coach_file_text = " ";
var new_coach_file_text = " ";
var coach_file_array = [];
var old_text;
var new_coach_array = [];
var roster_schedules=[];
var roster_teams=[];
var fields_in_order=[
          "Playground Commons",
          "Scrapco Field",
          "Tin Can Alley",
          "The Paveway",
          "Eckman Acres",
          "Dubois Diamond",
          "Cement Gardens",
          "Steele Stadium",
          "Casa de Pablo",
          "Sandy Flats",
          "Playground Commons",
          "Scrapco Field",
          "Tin Can Alley",
          "The Paveway",
          "Eckman Acres",
          "Dubois Diamond",
          "Cement Gardens",
          "Steele Stadium",
          "Casa de Pablo",
          "Sandy Flats",
          "Playground Commons",
          "Scrapco Field",
          "Tin Can Alley",
          "The Paveway"
];


///Mixes up the uploaded rosters
function shakeAndBake(){

        document.getElementById("allItems team_sort_list24").innerHTML="";
        new_player_list = []
        for (var i = 1; i<Object.keys(Players).length; i++){
            new_player_list.push(i);
        }
        shuffleArray(new_player_list);
        var cur_player=1;
        for(var t=0; t<24; t++){
          rost_items = document.getElementById("allItems team_sort_list"+t).children;

            for(var p =0; p<9; p++){
              rost_items[p].removeAttribute("title");
              rost_items[p].removeAttribute("data-original-title");
              rost_items[p].removeAttribute("data-placement");
              rost_items[p].removeAttribute("data-toggle");
              rost_items[p].setAttribute("data-toggle","tooltip");
              player_stats_tip="BATTING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Batting)+ "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Batting))
                                + "  RUNNING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Running)+  "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Running))
                                + "  PITCHING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Pitching)+  "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Pitching))
                                + "  FIELDING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Fielding)+  "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Fielding))
              rost_items[p].setAttribute("data-original-title",player_stats_tip);
              rost_items[p].setAttribute("data-placement","top");
              rost_items[p].innerHTML = intToPair(new_player_list[cur_player])+" "+Players[intToPair(new_player_list[cur_player])].Name;
              cur_player+=1;
            }

            }
            for (var i = cur_player; i<Object.keys(Players).length-1; i++){
              var new_li = document.createElement('li');
              new_li.innerHTML= intToPair(new_player_list[cur_player])+" "+ Players[intToPair(new_player_list[cur_player])].Name;
              new_li.setAttribute("class","ui-draggable ui-droppable");

              new_li.removeAttribute("title");
              new_li.removeAttribute("data-original-title");
              new_li.removeAttribute("data-placement");
              new_li.removeAttribute("data-toggle");
              new_li.setAttribute("data-toggle","tooltip");
              player_stats_tip="BATTING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Batting)+ "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Batting))
                                + "  RUNNING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Running)+ "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Running))
                                + "  PITCHING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Pitching)+ "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Pitching))
                                + "  FIELDING: "+ "O".repeat(Players[intToPair(new_player_list[cur_player])].Fielding)+ "-".repeat(10-(Players[intToPair(new_player_list[cur_player])].Fielding));
              new_li.setAttribute("title",player_stats_tip );
              new_li.setAttribute("data-placement","top");
              document.getElementById("allItems team_sort_list24").appendChild(new_li);
              cur_player+=1;
            }


            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })


            $(function() {
                   $("#dragdiv li,#dropdiv li").draggable({
                       appendTo: "body",
                       helper: "clone",
                       cursor: "move",
                       revert: "invalid"
                   });

                   initDroppable($("#dropdiv li,#dragdiv li"));
                   function initDroppable($elements) {
                       $elements.droppable({
                           activeClass: "ui-state-default",
                           hoverClass: "ui-drop-hover",
                           accept: ":not(.ui-sortable-helper)",

                           over: function(event, ui) {
                               var $this = $(this);
                           },
                           drop: function(event, ui) {
                               var $this = $(this);
                               var title = ui.draggable.context.getAttribute('data-original-title');
                               console.log(title);
                               var li1 = $("<li  data-html='true' data-toggle='tooltip'"+ " title='"+title+"'>" + ui.draggable.text() + '</li>')
                                var linew1 = $(this).after(li1);


                               var title2 = $(this).context.getAttribute('data-original-title');

                               var li2 = $("<li data-html='true'  data-toggle='tooltip'"+ " title='"+title2+"'>" + $(this).text() + '</li>');
                               var linew2 = $(ui.draggable).after(li2);


                               $(ui.draggable).remove();
                               $(this).remove();

                               initDroppable($("#dropdiv li,#dragdiv li"));
                               $("#dragdiv li,#dropdiv li").draggable({
                                   appendTo: "body",
                                   helper: "clone",
                                   cursor: "move",
                                   revert: "invalid"
                               });
                           }
                       });

                       $(function () {
                         $('[data-toggle="tooltip"]').tooltip()
                       })
                   }
               });

}

//Shuffles an array, should be in the utilities.js file
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

///populates all of the forms
function populateRosterSorts(){
  for (var j = 0; j<25; j++){
      var roster_sorts = document.createElement('div');
      roster_sorts.setAttribute('id','maindiv');
      html_sort=[     "<div class='col-md-3'>",
                      " <table id='team_table_color"+j+"' class='table table-dark'>",
                         "<thead>",
                          " <tr>",
                          "   <th scope='col' id=roster_team_name"+j+">TEAM NAME</th>",
                        "   </tr>",
                      "   </thead>",
                      "   <tbody>",
                           "<tr class= 'team_roster_sort'>",
                          "   <td>",
                          "   <div id='dragdiv'>",
                                " <ul id='allItems team_sort_list"+j+"' runat='server'>",
                                  "   <li >Item A</li>",
                                  "   <li>Item B</li>",
                                  "   <li >Item C</li>",
                                  "   <li >Item D</li>",
                                  "   <li >Item E</li>",
                                  "   <li >Item F</li>",
                                  "   <li >Item G</li>",
                                  "   <li >Item H</li>",
                                  "   <li >Item I</li>",
                                 "</ul>",
                      "</div>",
                      " </td>",
                      "</tbody>",
                      " </table>",
                      "</div>"].join("");
    roster_sorts.innerHTML = html_sort;
    document.getElementById("divisions_show").appendChild(roster_sorts);

}



    var ul = document.getElementById("allItems team_sort_list24");
    var table = document.getElementById("team_table_color24");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    table.parentElement.setAttribute("class","col-md-9");
    document.getElementById("roster_team_name24").innerHTML = "Free Agents";
    ///DRAGGABLE FUNCTION


}

///Generates the coach file from all update functions
function generateCoachFile(){
  updateRosters_R(44);

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

///updates the rosters from the roster forms
//TODO match up the middle lines with forms
function updateRosters_R(num){

    for (var r = 0; r<24; r++){
      var team="";

      tsl = document.getElementById("allItems team_sort_list"+r);
      tsl_players= tsl.children;
      for (var p =0;p<9;p++){
        team+= tsl_players[p].innerHTML.substring(0,2);
      }

    var midline="";
    midline+=roster_teams[r].unknown_middle;
    midline+=roster_teams[r].team_adj;
    midline+=roster_teams[r].team_name;
    midline+=roster_teams[r].color_1;
    midline+=roster_teams[r].color_2;
    midline+=roster_teams[r].wins;
    midline+=roster_teams[r].losses;

    value = new_coach_array[num+r].split("=");
    new_coach_array[num+r]= value[0]+"="+team+midline+team;
    }


}

///submits text area
function submitRCoachFile(){
  coach_file_text = document.getElementById("coachfiletext").value;
  coach_file_array =  $("#coachfiletext").val().split('\n');
  new_coach_array =  $("#coachfiletext").val().split('\n');
  document.getElementById("coach_submission").style.display = "none";
  uploadCoachFile();
}

//submits the season3 coach file
function submitS3CoachFile(){
  coach_file_text = document.getElementById("coachfiletext");
  coach_file_text.value = season3coachfile;
  submitRCoachFile()
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

    uploadRosters(44);


}

///uploads Rosters to forms
function uploadRosters(rownum){
  var rt=[];
  for (var r=0; r<24; r++){
    var sequence = coach_file_array[rownum+r].split("=")[1];
    rt.push(new rosterObj(sequence));
  }
  roster_teams=rt;

  for(var t=0; t<24; t++){

      rost_items = document.getElementById("allItems team_sort_list"+t).children;
      team_name_header = document.getElementById("roster_team_name"+t);
      team_table = document.getElementById("team_table_color"+t);
      team_table.style.backgroundColor = roster_teams[t].getTeamHex1();
      team_table.style.color = roster_teams[t].getTeamHex2();
      team_name_header.innerHTML = t+" "+roster_teams[t].getTeamAdjStr() +" "+ roster_teams[t].getTeamNameStr() +"<br> " +"["+fields_in_order[t]+"]";

      for(var p =0; p<9; p++){

        rost_items[p].setAttribute("data-toggle","tooltip");
        player_stats_tip="BATTING: "+ "O".repeat(Players[roster_teams[t].batting_order[p]].Batting)+ "-".repeat(10-(Players[roster_teams[t].batting_order[p]].Batting))
                          + "  RUNNING: "+ "O".repeat(Players[roster_teams[t].batting_order[p]].Running)+  "-".repeat(10-(Players[roster_teams[t].batting_order[p]].Running))
                          + "  PITCHING: "+ "O".repeat(Players[roster_teams[t].batting_order[p]].Pitching)+  "-".repeat(10-(Players[roster_teams[t].batting_order[p]].Pitching))
                          + "  FIELDING: "+ "O".repeat(Players[roster_teams[t].batting_order[p]].Fielding)+  "-".repeat(10-(Players[roster_teams[t].batting_order[p]].Fielding))
        rost_items[p].setAttribute("title",player_stats_tip);
        rost_items[p].setAttribute("data-placement","top");
        rost_items[p].innerHTML = roster_teams[t].batting_order[p]+" "+Players[roster_teams[t].batting_order[p]].Name;


      }

  }
  for (var p = 0; p<Object.keys(Players).length; p++){
    var isFreeAgent=true;
    for (var t=0; t<24; t++){
        for(var b=0; b<9; b++){
          if(Players[roster_teams[t].batting_order[b]].Name == Players[intToPair(p)].Name){
            var isFreeAgent=false;
            break;
          }
        }
    }
      if (isFreeAgent){
        var new_li = document.createElement('li');
        new_li.innerHTML= intToPair(p)+" "+ Players[intToPair(p)].Name;
        new_li.setAttribute("class","ui-draggable ui-droppable");
        new_li.setAttribute("data-toggle","tooltip");
        player_stats_tip="BATTING: "+ "O".repeat(Players[intToPair(p)].Batting)+ "-".repeat(10-(Players[intToPair(p)].Batting))
                          + "  RUNNING: "+ "O".repeat(Players[intToPair(p)].Running)+ "-".repeat(10-(Players[intToPair(p)].Running))
                          + "  PITCHING: "+ "O".repeat(Players[intToPair(p)].Pitching)+ "-".repeat(10-(Players[intToPair(p)].Pitching))
                          + "  FIELDING: "+ "O".repeat(Players[intToPair(p)].Fielding)+ "-".repeat(10-(Players[intToPair(p)].Fielding));
        new_li.setAttribute("title",player_stats_tip );
        new_li.setAttribute("data-placement","top");

        document.getElementById("allItems team_sort_list24").appendChild(new_li);

      }
    }
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })


    $(function() {
           $("#dragdiv li,#dropdiv li").draggable({
               appendTo: "body",
               helper: "clone",
               cursor: "move",
               revert: "invalid"
           });

           initDroppable($("#dropdiv li,#dragdiv li"));
           function initDroppable($elements) {
               $elements.droppable({
                   activeClass: "ui-state-default",
                   hoverClass: "ui-drop-hover",
                   accept: ":not(.ui-sortable-helper)",

                   over: function(event, ui) {
                       var $this = $(this);
                   },
                   drop: function(event, ui) {
                       var $this = $(this);
                       var title = ui.draggable.context.getAttribute('data-original-title');
                       console.log(title);
                       var li1 = $("<li  data-html='true' data-toggle='tooltip'"+ " title='"+title+"'>" + ui.draggable.text() + '</li>')
                       var linew1 = $(this).after(li1);


                       var title2 = $(this).context.getAttribute('data-original-title');

                       var li2 = $("<li data-html='true'  data-toggle='tooltip'"+ " title='"+title2+"'>" + $(this).text() + '</li>');
                       var linew2 = $(ui.draggable).after(li2);


                       $(ui.draggable).remove();
                       $(this).remove();

                       initDroppable($("#dropdiv li,#dragdiv li"));
                       $("#dragdiv li,#dropdiv li").draggable({
                           appendTo: "body",
                           helper: "clone",
                           cursor: "move",
                           revert: "invalid"
                       });
                   }
               });

               $(function () {
                 $('[data-toggle="tooltip"]').tooltip()
               })
           }
       });
}

///Export coach file data to CSV
function exportCoachFileCSV(){
  var rows=[['num','adj','name','lf','cf','rf','3rd','2nd','1st','ss','c','p']];
  for (var r = 0; r<24; r++){
    t = roster_teams[r];
    rows.push([r.toString(),t.getTeamAdjStr(),t.getTeamNameStr(),Players[t.left_field].Name,Players[t.center_field].Name,Players[t.right_field].Name,Players[t.third_base].Name,Players[t.second_base].Name,Players[t.first_base].Name,Players[t.short_stop].Name,Players[t.catcher].Name,Players[t.pitcher].Name]);
  }

  var csv = '';
    rows.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

  console.log(encodeURI(csv));
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'bybdata.csv';
  hiddenElement.click();

}


////COPY CLIPBOARD Action
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
