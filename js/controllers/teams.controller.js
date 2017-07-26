$(document).ready(function(){
  toggleAddTeamForm();
  addTeam();
  renderTeamsList();
  hideThreePlayers();
  toggleThreePlayers();
  $('.collapsible').collapsible();
});

function toggleAddTeamForm() {
  $('#show_add_team').on('click', (event) => {
    event.preventDefault();
    $('#add_team').toggle();
  })
};

function addTeam() {
  $('#add_team').on('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    let team_name = $('#team_name').val();
    let team_city = $('#team_city').val();
    let newTeam = new team(team_name, team_city);
    // need to add to list of teams for add_player selector
    $('#select_team').append(`<option value=${newTeam.name}>${newTeam.name}</option>`)
    appendNewTeam(newTeam);
    $('#add_team')[0].reset();
    $('#team_name').focus();
  })
};

// function addList(){
//
//   $('#add_list').on('submit', function(event){
//     let newList = new List($('#list_title').val())
//     $('#select_list').append(`<option value=${newList.id}>${newList.title}</option>`)
//     $('#add_task').show()
//     $('#lists').append(`<div id='tasks_div_${newList.id}' class="list"><h2><button class="destroy-list">x</button> ${newList.title}</h2><ul id="${newList.id}" data-id="${newList.id}"></ul></div>`)
//     $('#add_list')[0].reset()
//     $('#task_description').focus()
//     event.preventDefault()
//   })
// }

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
