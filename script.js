window.onload = function(){
    let number_of_players = 0;

    let one_player_div = document.getElementById("1-player-div");
    let two_player_div = document.getElementById("2-players-div");
    let three_player_div = document.getElementById("3-players-div");
    let four_player_div = document.getElementById("4-players-div");
    let five_player_div = document.getElementById("5-players-div");
    let six_player_div = document.getElementById("6-players-div");
    let more_player_div = document.getElementById("more-players-div");
    let players_div = document.getElementsByClassName("number-players-image-div")

    function selectNumberPlayers(div, number_players) {
        for (let i = 0; i < players_div.length; i++){
            players_div[i].style.backgroundColor = "#FAECD7";
        };
        div.style.backgroundColor = "#720004";
        number_of_players = number_players;
    };

    one_player_div.addEventListener("click", () => selectNumberPlayers(one_player_div, 1));
    two_player_div.addEventListener("click", () => selectNumberPlayers(two_player_div, 2));
    three_player_div.addEventListener("click", () => selectNumberPlayers(three_player_div, 3));
    four_player_div.addEventListener("click", () => selectNumberPlayers(four_player_div, 4));
    five_player_div.addEventListener("click", () => selectNumberPlayers(five_player_div, 5));
    six_player_div.addEventListener("click", () => selectNumberPlayers(six_player_div, 6));
    more_player_div.addEventListener("click", () => selectNumberPlayers(more_player_div, 7));
};