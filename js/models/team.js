function createTeam() {
  let teamCount = 0;

  return class Team {
    constructor(name, city) {
      this.id = ++teamCount;
      this.name = name;
      this.city = city;
      store.teams.push(this);
      // appendNewTeam(this);
    };

    static all() {
      return store.teams
    };

    static findById(id) {
      return store.teams.filter( (team) => {
        return team.id === id
      })[0]
    };

    static findByName(name) {
      return store.teams.filter( (team) => {
        return team.name === name
      })
    };

    static players(teamName) {
      return store.players.filter( (player) => {
        return player.team.name === teamName
      })
    };

    static topThreePlayers(teamName) {
      let arr =  team.players(teamName).sort(function(a,b) {
        return b.points - a.points;
      });
      return arr.splice(0, 3);
    };
  }
};

let team = createTeam()

new team('Chickens', 'Philly')
new team('Turkeys', 'Bahston')
new team('Norse Gods', 'Brooklyn')
