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
  $('#teams_table tr.clicky').on('click', (event) => {

    // debugger;
    let target = event.target
    let team = findTeamByName(target.innerText)
    renderTeamPlayers(team);
    $('#players_table').toggle();
    // event.target
  });
};
// event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement)


function appendNewTeam(team) {
  // $('teams_table').append(`<tr class="clicky ${team.id}"><td>${team.id}</td><td >${team.name}</td><td>${team.city}</td>`)

  // let newTeamRow = Document.createElement('tr', )
  let teams_table = $('#teams_table')
  let teamRow = teams_table[0].insertRow(-1);
  teamRow.className = `clicky ${team.id}`
  let cell1 = teamRow.insertCell(0);
  let cell2 = teamRow.insertCell(1);
  let cell3 = teamRow.insertCell(2);
  cell1.innerHTML = `${team.id}`
  cell2.innerHTML = `${team.name}`
  cell3.innerHTML = `${team.city}`
};
