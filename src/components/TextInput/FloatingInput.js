import React, {useEffect, useState, useCallback, forwardRef} from 'react';
import {Box, Text, Row} from 'native-base';
import {TouchableOpacity, View, StyleSheet, Platform} from 'react-native';

import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useDispatch, useSelector} from 'react-redux';

import {fonts} from '../../styles/font';
import {lightColors} from '../../styles/colors';
// import { lightColors } from "../../styles/colors";

export const FloatingInput = ({
    value,
    onChangeText,
    textColor = 'black',
    placeholder = 'RandomTitle',
    style = {},
    ...rest
}) => {
    return (
        <FloatingLabelInput
            // ref={ref}
            label={placeholder}
            inputStyles={[
                {
                    fontSize: 14,
                    height: 48,
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
            onChangeText={onChangeText}
            containerStyles={{
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: lightColors.LIGHT_BORDER,
                borderRadius: 8,
            }}
            {...rest}
        />
    );
};
