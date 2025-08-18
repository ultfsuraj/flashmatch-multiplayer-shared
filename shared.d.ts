export type Games = {
  chess: {
    name: 'chess';
    minPlayers: 2;
    maxPlayers: 2;
  };
  colorWars: {
    name: 'colorWars';
    minPlayers: 2;
    maxPlayers: 2;
  };
  ludo: {
    name: 'ludo';
    minPlayers: 2;
    maxPlayers: 4;
  };
};

export type Events = {
  playerJoined: {
    name: 'playerJoined';
    payload: {
      number: number;
      playerName: string;
    };
  };
  joinRoom: {
    name: 'joinRoom';
    payload: {
      gameName: string;
      roomid: string;
      playerName: string;
    };
  };
};
