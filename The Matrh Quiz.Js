function add_User() {
    player1_name_input = document.getElementById("player1_name_input");
    player2_name_input = document.getElementById("player_name_input");
    
       player1_name = localStorage.setItem("player1_name",player1_name);
       player2_name = localStorage.setItem("player2_name",player_name);

 
     window.location.replace("quiz_game_page_.html");
 }

  
document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;