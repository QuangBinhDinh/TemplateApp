import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PLAYER_STAT } from './stat';
import { PlayerObject } from './type';

export const Player = ({ position, width, height }: PlayerObject) => {
    return (
        <View
            style={[
                styles.player,
                {
                    top: position[1],
                    left: position[0],
                    width,
                    height,
                },
            ]}
        ></View>
    );
};

const styles = StyleSheet.create({
    player: {
        borderRadius: 80,
        backgroundColor: 'red',
        position: 'absolute',
    },
});
