import React, { memo } from 'react';
import { View, ViewProps } from 'react-native';
import { getCustomTheme } from './hooks/getCustomTheme';

export const DividerBold = ({ style, ...rest }: ViewProps) => {
    const { colors } = getCustomTheme();

    return (
        <View
            style={[{ backgroundColor: colors.GRAY_INPUT, width: '100%', height: 20, marginTop: 20 }, style]}
            {...rest}
        />
    );
};
