export declare const Games: {
    chess: {
        name: string;
        minPlayers: number;
        maxPlayers: number;
    };
    colorWars: {
        name: string;
        minPlayers: number;
        maxPlayers: number;
    };
    ludo: {
        name: string;
        minPlayers: number;
        maxPlayers: number;
    };
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
export type Ack = {
    success: boolean;
    order?: number;
    error?: string;
};
export {};
