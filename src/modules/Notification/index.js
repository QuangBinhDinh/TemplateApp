//UI
import React, { useState } from 'react';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Player } from './entities';
import { PlayerController } from './system';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@util/index';
import { PLAYER_STAT } from './stat';
const NotificationScreen = () => {
    const [cardDetails, setCard] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <GameEngine
                style={{ flex: 1 }}
                entities={{
                    player: {
                        position: [PLAYER_STAT.BEGIN_XPOS, PLAYER_STAT.BEGIN_YPOS],
                        renderer: <Player />,
                        height: PLAYER_STAT.HEIGHT,
                        width: PLAYER_STAT.WIDTH,
                        movable: false,
                    },
                }}
                systems={[PlayerController]}
                running={true}
            />
        </View>
    );
};

export default NotificationScreen;
