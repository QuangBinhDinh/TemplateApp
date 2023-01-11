import { PlayerObject } from './type';

interface Entites {
    player: PlayerObject;
}
interface TouchSystem {
    touches: {
        event: {
            locationX: number;
            locationY: number;
            pageX: number;
            pageY: number;
        };
        delta: {
            locationX: number;
            locationY: number;
            pageX: number;
            pageY: number;
        };
        type: string;
    }[];
    layout: {
        height: number;
        width: number;
    };
}

export const PlayerController = (entities: Entites, { touches, layout }: TouchSystem) => {
    //console.log(touches);
    if (touches.length == 0) return entities;

    const gameWidth = layout.width;
    const gameHeight = layout.height;
    const touchPos = touches[0].event;
    const touchDelta = touches[0].delta;
    let player = entities.player;

    switch (touches[0].type) {
        case 'start':
            if (
                touchPos.pageX >= player.position[0] &&
                touchPos.pageX <= player.position[0] + player.width &&
                touchPos.pageY >= player.position[1] &&
                touchPos.pageY <= player.position[1] + player.height
            ) {
                player.movable = true;
            }
            break;
        case 'move':
            if (player.movable) {
                player.position[0] = player.position[0] + touchDelta.pageX;
            }
            break;
        default:
            break;
    }

    return entities;
};
