import React from 'react';

import { Platform, Text, StyleProp, TextStyle, TextProps } from 'react-native';
import { getCustomTheme } from './hooks/getCustomTheme';

import { fonts } from '../styles/font';

export const TextBigTitle = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
                fontSize: 20,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const TextSubtitle = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
                fontSize: 16,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);
export const TextSubtitleBold = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
                fontSize: 16,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const TextNormal = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
                fontSize: 14,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const TextNormalBold = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
                fontSize: 14,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const TextSmall = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
                fontSize: 12,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

export const TextLight = ({ children, style, ...rest }: TextProps) => (
    <Text
        style={[
            {
                fontFamily: Platform.select({
                    ios: 'Heebo-Light',
                    android: 'heebo.light',
                }),
                fontSize: 12,
                color: 'black',
            },
            style,
        ]}
        {...rest}
    >
        {children}
    </Text>
);
