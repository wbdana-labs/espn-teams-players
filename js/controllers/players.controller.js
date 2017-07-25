$(document).ready(function(){
  // renderTeamPlayers(team);
});

// function renderPlayersList() {
//   store.players.forEach(function(player){
//     $('#players_table').append(`<tr><td>${player.id}</td><td>${player.name}</td><td>${player.team}</td>`)
//   })
// };

//
// function renderTeamPlayers() {
//   $('#teams_table').on('click', (event) => {
//     // $('teams_table tr').remove()
//     let teamName = event.target.innerText
//     let relevantTeam = team.findByName(teamName)
//     let players = team.players(relevantTeam); // need to pull only 3 highest scoring players instead
//     let players_table = $('#players_table')
//     players_table.find('tr').remove();
//     players.forEach( (player) => {
//       let playerRow = players_table[0].insertRow(-1);
//       playerRow.className = `link-to-player ${player.id}`;
//       let cell1 = playerRow.insertCell(0);
//       let cell2 = playerRow.insertCell(1);
//       let cell3 = playerRow.insertCell(2);
//       cell1.innerHTML = `${player.name}`
//       cell2.innerHTML = `${player.team.name}`
//       cell3.innerHTML = `${player.points}`
//     })
//   })
// };
