$(document).ready(function(){
  hidePlayerDetail();
  showPlayerDetail();
  toggleAddPlayerForm();
  populateSelectTeam();
  addPlayer();
});

function toggleAddPlayerForm() {
  $('#show_add_player').on('click', (event) => {
    event.preventDefault();
    $('#add_player').toggle();
  })
  $('#select_team').toggle();
};

function populateSelectTeam() {
  team.all().forEach(function(team) {
    $('#select_team').append(`<option value=${team.name}>${team.name}</option>`)
  })
};

function addPlayer() {
  $('#add_player').on('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    let player_name = $('#player_name').val();
    let player_team = $('#select_team').val();
    let player_hometown = $('#player_hometown').val();
    let player_birthday = $('#player_birthday').val();
    let player_points = $('#player_points').val();
    let newPlayer = new player(player_name, player_team, player_hometown, player_birthday, player_points)
  })
};


function hidePlayerDetail() {
  $('#player_detail').hide()
};

function showPlayerDetail() {
  $('body').on('click', (event) => {
    let allPlayerNames = player.all().map( (player) => { return player.name });
    let player_detail = $('#player_detail')[0]
    if (allPlayerNames.includes(event.target.innerText)) {
      let playerName = event.target.innerText;
      let relevantPlayer = player.findByName(playerName);
      player_detail.innerHTML = `<thead><th>Player Detail</th></thead><tbody><tr><td>Player Name</td><td>Points</td><td>Hometown</td><td>Birthday</td><td>Team Name</td></tr><tr><td>${relevantPlayer.name}</td><td>${relevantPlayer.points}</td><td>${relevantPlayer.hometown}</td><td>${relevantPlayer.birthday}</td><td>${relevantPlayer.team.name}</td></tr></tbody>`
    };
    $('#player_detail').toggle();
  })
};
