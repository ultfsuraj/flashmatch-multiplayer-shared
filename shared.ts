export const Games = {
  chess: {
    name: 'chess',
    minPlayers: 2,
    maxPlayers: 2,
  },
  colorWars: {
    name: 'colorWars',
    minPlayers: 2,
    maxPlayers: 2,
  },
  ludo: {
    name: 'ludo',
    minPlayers: 2,
    maxPlayers: 4,
  },
};

type GameName = keyof typeof Games;

export type Moves = {
  chess: {};
  colorWars: {};
  ludo: {};
};

export type Events = {
  playerJoined: {
    name: 'playerJoined';
    payload: {
      order: number;
      playerName: string;
    };
  };
  joinRoom: {
    name: 'joinRoom';
    payload: {
      gameName: GameName;
      roomid: string;
      playerName: string;
    };
  };
  makeMove: {
    name: 'makeMove';
    payload: object;
  };
  exitRoom: {
    name: 'exitRoom';
    payload: {
      gameName: GameName;
      roomid: string;
      playerName: string;
    };
  };
};

export type Ack = { success: boolean; order?: number; error?: string };
