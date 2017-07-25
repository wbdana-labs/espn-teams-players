function createTeam() {
  let teamCount = 0;

  return class Team {
    constructor(name, city) {
      this.id = ++teamCount;
      this.name = name;
      this.city = city;
      store.teams.push(this);
      // appendNewTeam(this);
    }
  }
};

let team = createTeam()

function allTeams() {
  return store.teams
};

function findTeamById(id) {
  return store.teams.filter( (team) => {
    return team.id === id
  })[0]
};

function findTeamByName(name) {
  return store.teams.filter( (team) => {
    return team.name === name
  })[0]
};

function teamPlayers(team) {
  return store.players.filter( (player) => {
    return player.teamId === team.id
  })
};


new team('Chickens', 'Philly')
new team('Turkeys', 'Bahston')
new team('Norse Gods', 'Brooklyn')
