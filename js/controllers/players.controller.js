$(document).ready(function(){
  renderTeamPlayers(team);
});

// function renderPlayersList() {
//   store.players.forEach(function(player){
//     $('#players_table').append(`<tr><td>${player.id}</td><td>${player.name}</td><td>${player.team}</td>`)
//   })
// };


function renderTeamPlayers(team) {
  $('#teams_table').on('click', (event) => {
    let teamName = event.target.innerText
    let team = findTeamByName(teamName)
    let players = teamPlayers(team); // need to pull only 3 highest scoring players instead
    let players_table = $('#players_table')
    players.forEach( (player) => {
      let playerRow = players_table[0].insertRow(-1);
      playerRow.className = `link-to-player ${player.id}`;
      let cell1 = teamRow.insertCell(0);
      let cell2 = teamRow.insertCell(1);
      let cell3 = teamRow.insertCell(2);
      cell1.innerHTML = `${player.name}`
      cell2.innerHTML = `${player.team.name}`
      cell3.innerHTML = `${player.points}`
    })
  })
};
