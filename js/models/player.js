function createPlayer() {
  let playerCount = 0;

  return class Player {
    constructor(name, team, hometown, birthyear) {
      this.id = ++playerCount;
      this.name = name;
      this.team = team;
      this.points = Math.random();
      this.hometown = hometown;
      this.birthyear = birthyear;
      store.players.push(this);
    }

    static all() {
      store.players
    }
  }
}


let player = createPlayer()

function allPlayers() {
  return store.players
};

function findPlayerById(id){
  return store.players.filter( (player) => {
    return player.id === id
  })[0]
};


new player('Nate Robinson', 'Turkeys', 'NYC', 1977)
new player('Jim Brady', 'Chickens', 'NYC', 1977)
new player('Odin', 'Norse Gods', 'NYC', 1977)
