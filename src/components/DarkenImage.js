import React from 'react';
import { View } from 'native-base';

export const DarkenView = ({ children, style, opacity = 0 }) => (
    <View
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(0,0,0,0.15)`,
            ...style,
        }}
    >
        {children}
    </View>
);
