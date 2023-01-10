import React, { memo } from 'react';
import { View } from 'react-native';
import { getCustomTheme } from './hooks/getCustomTheme';
import { Icon } from '@rneui/themed';

export const DefaultAvatar = memo(() => {
    const { colors } = getCustomTheme();
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffc107',
            }}
        >
            <Icon type="feather" name="user" color={'white'} size={40} />
        </View>
    );
});
