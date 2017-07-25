$(document).ready(function(){
  hidePlayerDetail();
  showPlayerDetail();
});

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
