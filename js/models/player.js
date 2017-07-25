function createPlayer() {
  let playerCount = 0;

  return class Player {
    constructor(name, teamName, hometown, birthyear, points) {
      this.id = ++playerCount;
      this.name = name;
      // this.team = findTeamByName(teamName);
      this.team = team.findByName(teamName)[0];
      this.points = points
      this.hometown = hometown;
      this.birthyear = birthyear;
      store.players.push(this);
    };

    static all() {
      return store.players
    };

    static findById(id) {
      return store.players.filter( (player) => {
        return player.id === id
      })[0]
    };

    static findByName(name) {
      return store.players.filter( (player) => {
        return player.name === name
      })[0]
    };

  }
};


let player = createPlayer()

function allPlayers() {
  return store.players
};

function findPlayerById(id){
  return store.players.filter( (player) => {
    return player.id === id
  })[0]
};


new player('Nate Robinson', 'Turkeys', 'NYC', 1977, 35)
new player('Jim Brady', 'Chickens', 'NYC', 1977, 37)
new player('Odin', 'Norse Gods', 'NYC', 1977, 44)
new player('Thor', 'Norse Gods', 'NYC', 1977, 29)
new player('Freyja', 'Norse Gods', 'NYC', 1977, 78)
new player('Balder', 'Norse Gods', 'NYC', 1977, 29)
new player('Frigg', 'Norse Gods', 'NYC', 1977, 17)
new player('Sif', 'Norse Gods', 'NYC', 1977, 12)
