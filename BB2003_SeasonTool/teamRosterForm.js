


function get_team_info_forms(i){
    var r=[          " <h6> Team Info </h6>",
                    " <div class='col-md-12 d-flex align-items-baseline'>",
                        "<div class= 'form-group '>",
                          "<label for= 'adj'>Name 1</label>",
                          "<select class= 'form-control ' id= 'roster_adj_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'name'>Name 2</label>",
                          "<select class= 'form-control ' id= 'roster_name_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'color1'>Color 1</label>",
                          "<select class= 'form-control ' id= 'roster_color1_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'color2'>Color 2</label>",
                          "<select class= 'form-control ' id= 'roster_color2_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'wins'>Wins</label>",
                          "<input class='form-control' placeholder='0' type='text' maxlength='2' size='2' id= 'roster_wins_form"+i+"'>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'losses'>Losses</label>",
                          "<input class='form-control' placeholder='0' type='text' maxlength='2' size='2' id= 'roster_losses_form"+i+"'>",
                        "</div>",


                  "</div>"
                ].join("");
  return r;
}



function get_roster_forms(i){
    var r=[
                  "<h6>Team "+i+" Defense</h6>",
                  "<div class='col-md-12 d-flex align-items-baseline'>",
                    "<div class= 'form-group '>",
                      "<label for= 'LF '>LF</label>",
                      "<select class= 'form-control ' id= 'LF_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= 'CF '>CF</label>",
                      "<select class= 'form-control ' id= 'CF_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= 'RF '>RF</label>",
                      "<select class= 'form-control ' id= 'RF_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '3B '>3B</label>",
                      "<select class= 'form-control ' id= '3B_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '2B '>2B</label>",
                      "<select class= 'form-control ' id= '2B_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '1B '>1B</label>",
                      "<select class= 'form-control ' id= '1B_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= 'SS '>SS</label>",
                      "<select class= 'form-control ' id= 'SS_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= 'C '>C</label>",
                      "<select class= 'form-control ' id= 'C_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= 'P '>P</label>",
                      "<select class= 'form-control ' id= 'P_form"+i+"'>",

                      "</select>",
                    "</div>",
                  "</div>",
                " <h6>Batting Order</h6>",
                " <div class='col-md-12 d-flex align-items-baseline'>",
                    "<div class= 'form-group '>",
                      "<label for= '1 '>1</label>",
                      "<select class= 'form-control ' id= '1_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '2 '>2</label>",
                      "<select class= 'form-control ' id= '2_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '3 '>3</label>",
                      "<select class= 'form-control ' id= '3_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '4 '>4</label>",
                      "<select class= 'form-control ' id= '4_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '5 '>5</label>",
                      "<select class= 'form-control ' id= '5_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '6 '>6</label>",
                      "<select class= 'form-control ' id= '6_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '7 '>7</label>",
                      "<select class= 'form-control ' id= '7_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '8 '>8</label>",
                      "<select class= 'form-control ' id= '8_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "<div class= 'form-group '>",
                      "<label for= '9 '>9</label>",
                      "<select class= 'form-control ' id= '9_form"+i+"'>",

                      "</select>",
                    "</div>",
                    "</div>",

                    " <h6> Team Info </h6>",
                    " <div class='col-md-12 d-flex align-items-baseline'>",
                        "<div class= 'form-group '>",
                          "<label for= 'adj'>Name 1</label>",
                          "<select class= 'form-control ' id= 'roster_adj_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'name'>Name 2</label>",
                          "<select class= 'form-control ' id= 'roster_name_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'color1'>Color 1</label>",
                          "<select class= 'form-control ' id= 'roster_color1_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'color2'>Color 2</label>",
                          "<select class= 'form-control ' id= 'roster_color2_form"+i+"'>",

                          "</select>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'wins'>Wins</label>",
                          "<input class='form-control' placeholder='0' type='text' maxlength='2' size='2' id= 'roster_wins_form"+i+"'>",
                        "</div>",
                        "<div class= 'form-group '>",
                          "<label for= 'losses'>Losses</label>",
                          "<input class='form-control' placeholder='0' type='text' maxlength='2' size='2' id= 'roster_losses_form"+i+"'>",
                        "</div>",


                  "</div>"
                ].join("");
  return r;
}
