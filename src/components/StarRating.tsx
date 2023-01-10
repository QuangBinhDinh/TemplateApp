import React, { memo } from 'react';
import { getCustomTheme } from './hooks/getCustomTheme';
import { View } from 'react-native';
import { Icon } from '@rneui/themed';

export const StarRating = memo(({ rating, style }: { rating: number | string; style?: any }) => {
    const { colors } = getCustomTheme();
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                },
                style,
            ]}
        >
            <Icon
                type="antdesign"
                name={rating >= 0.5 ? 'star' : 'staro'}
                size={18}
                color={colors.YELLOW_STAR}
                style={{ marginRight: 1 }}
            />
            <Icon
                type="antdesign"
                name={rating >= 1.5 ? 'star' : 'staro'}
                size={18}
                color={colors.YELLOW_STAR}
                style={{ marginRight: 1 }}
            />
            <Icon
                type="antdesign"
                name={rating >= 2.5 ? 'star' : 'staro'}
                size={18}
                color={colors.YELLOW_STAR}
                style={{ marginRight: 1 }}
            />
            <Icon
                type="antdesign"
                name={rating >= 3.5 ? 'star' : 'staro'}
                size={18}
                color={colors.YELLOW_STAR}
                style={{ marginRight: 1 }}
            />
            <Icon
                type="antdesign"
                name={rating >= 4.5 ? 'star' : 'staro'}
                size={18}
                color={colors.YELLOW_STAR}
                style={{ marginRight: 1 }}
            />
        </View>
    );
});
