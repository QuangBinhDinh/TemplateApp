import React, { memo, useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

interface IProps extends FastImageProps {
    delay?: number;
}

const ImageLoader = ({ delay, style, onLoad, ...rest }: IProps) => {
    const opacity = useRef(new Animated.Value(0)).current;

    const onLoadComponent = useCallback(
        e => {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                delay: delay || 0,
            }).start();

            onLoad && onLoad(e);
        },
        [delay, onLoad, opacity],
    );

    return (
        <AnimatedFastImage
            {...rest}
            onLoad={onLoadComponent}
            style={[
                {
                    opacity,
                    transform: [
                        {
                            scale: opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.85, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                    width: '100%',
                    height: '100%',
                },
                style,
            ]}
        />
    );
};

export default memo(ImageLoader);
