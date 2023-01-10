import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

const SplashScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <FastImage
                style={{ width: '100%', height: '100%' }}
                resizeMode={'cover'}
                source={require('@image/Splash.png')}
            />
        </View>
    );
};

export default SplashScreen;
