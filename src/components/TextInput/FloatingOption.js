import React, { useEffect, useState, useCallback, forwardRef } from 'react';
import { Box, Text, Row } from 'native-base';
import { TouchableOpacity, View, StyleSheet, Platform, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useDispatch, useSelector } from 'react-redux';

import { fonts } from '../../styles/font';
import { lightColors } from '../../styles/colors';
import { TextNormal } from '../Text';
import { getCustomTheme } from '../hooks/getCustomTheme';
// import { lightColors } from "../../styles/colors";

export const FloatingOption = ({
    value,
    onPress = () => {},
    textColor = 'black',
    placeholder = 'RandomTitle',
    style = {},
    ...rest
}) => {
    const { colors } = getCustomTheme();
    return (
        <Pressable style={{ height: 48, width: '100%', flexDirection: 'row' }} onPress={onPress}>
            <View pointerEvents="none" style={{ flex: 1 }}>
                <FloatingLabelInput
                    // ref={ref}
                    editable={false}
                    label={placeholder}
                    inputStyles={[
                        {
                            fontSize: 14,
                            height: 48,
                            width: '100%',
                            paddingLeft: 4.5,
                            fontFamily: Platform.select({
                                ios: 'Heebo-Regular',
                                android: 'heebo.regular',
                            }),
                        },
                        style,
                    ]}
                    customLabelStyles={{
                        colorFocused: '#000000',
                        colorBlurred: lightColors.DARK_BORDER,
                        fontSizeBlurred: 14,
                        topFocused: -16,
                        leftFocused: 5,
                    }}
                    value={value}
                    containerStyles={{
                        paddingLeft: 10,
                        borderWidth: 1,
                        borderColor: lightColors.LIGHT_BORDER,
                        borderRadius: 8,
                    }}
                    rightComponent={
                        <Icon
                            style={{ marginRight: 8, marginTop: 15 }}
                            type="antdesign"
                            name="down"
                            size={14}
                            color={colors.DARK_BORDER}
                        />
                    }
                    {...rest}
                />
            </View>
        </Pressable>
    );
};
