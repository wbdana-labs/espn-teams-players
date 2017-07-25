$(document).ready(function(){
  renderTeamsList();
  hideThreePlayers();
  toggleThreePlayers();
});

function renderTeamsList() {
  store.teams.forEach(function(team) {
    $('#teams_table').append(`<tr class="clicky ${team.id}"><td>${team.id}</td><td >${team.name}</td><td>${team.city}</td>`)
  })
};

function hideThreePlayers() {
  $('#players_table').hide()
};

function toggleThreePlayers() {
  $('#teams_table').on('click', (event) => {
    event.stopPropagation();
    let allTeamNames = team.all().map( (team) => {return team.name});
    if (allTeamNames.includes(event.target.innerText)) {
      let teamName = event.target.innerText;
      let players = team.topThreePlayers(teamName)
      let players_table = $('#players_table')[0]
      let players_table_body = []
      players.forEach( (player) => {
        players_table_body.push(`<tr class="link-to-player ${player.id}"><td>${player.name}</td><td>${player.points}</td></tr>`)
      });
      players_table.innerHTML = '<thead><th>Players</th></thead>' + '<tr><td>Name</td><td>Points</td>' + players_table_body.join('')
      $('#players_table').toggle();
      $('#player_detail').hide();
    }
  })
};

function appendNewTeam(team) {
  let teams_table = $('#teams_table')
  let teamRow = teams_table[0].insertRow(-1);
  teamRow.className = `clicky ${team.id}`
  let cell1 = teamRow.insertCell(0);
  let cell2 = teamRow.insertCell(1);
  let cell3 = teamRow.insertCell(2);
  cell1.innerHTML = `${team.id}`
  cell2.innerHTML = `${team.name}`
  cell3.innerHTML = `${team.city}`
  $(`tr.clicky ${team.id}`).on('click', (event) => {
    let teamName = event.target.innerText
    let players = team.players(teamName)
    let players_table = $('#players_table')[0]
    $('#players_table tr').remove()
    players.forEach( (player) => {
      let playerRow = players_table.insertRow(-1);
      playerRow.className = `link-to-player ${player.id}`;
      playerRow.innerHTML = `<td>${player.name}</td><td>${player.team.name}</td><td>${player.points}</td>`
    })
    $('#players_table').toggle();
})};
