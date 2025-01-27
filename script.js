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

    let time_of_game = 0

    let fifteen_minutes_div = document.getElementById("15-minutes-div");
    let thirty_minutes_div = document.getElementById("30-minutes-div");
    let fourty_five_mintes_div = document.getElementById("45-minutes-div");
    let sixty_minutes_div = document.getElementById("60-minutes-div");

    let time_div = document.getElementsByClassName("time-images-div");

    function selectTime(div, time) {
        for (let i = 0; i < time_div.length; i++){
            time_div[i].style.backgroundColor = "#FAECD7";
        };
        div.style.backgroundColor = "#720004";
        time_of_game = time;
    }

    fifteen_minutes_div.addEventListener("click", () => selectTime(fifteen_minutes_div, 15));
    thirty_minutes_div.addEventListener("click", () => selectTime(thirty_minutes_div, 30));
    fourty_five_mintes_div.addEventListener("click", () => selectTime(fourty_five_mintes_div, 45));
    sixty_minutes_div.addEventListener("click", () => selectTime(sixty_minutes_div, 60));

    let type_of_game = '';

    let cards_game_div = document.getElementById("game-cards-div");
    let chance_game_div = document.getElementById("game-chance-div");
    let cooperation_game_div = document.getElementById("game-cooperation-div");
    let dice_game_div = document.getElementById("game-dice-div");
    let letters_game_div = document.getElementById("game-letters-div");
    let strategy_game_div = document.getElementById("game-strategy-div");

    let type_div = document.getElementsByClassName("game-type-div")

    function selectType(div, type) {
        for (let i = 0; i < type_div.length; i++){
            type_div[i].querySelector("img").style.backgroundColor = "#FAECD7";
        };
        div.querySelector("img").style.backgroundColor = "#720004";
        type_of_game = type;
    }

    cards_game_div.addEventListener("click", () => selectType(cards_game_div, "Cards"));
    chance_game_div.addEventListener("click", () => selectType(chance_game_div, "Chance"));
    cooperation_game_div.addEventListener("click", () => selectType(cooperation_game_div, "Cooperation"));
    dice_game_div.addEventListener("click", () => selectType(dice_game_div, "Dice"));
    letters_game_div.addEventListener("click", () => selectType(letters_game_div, "Letters"));
    strategy_game_div.addEventListener("click", () => selectType(strategy_game_div, "Strategy"));
};