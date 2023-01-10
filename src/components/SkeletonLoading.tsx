import React, { memo, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinear = Animated.createAnimatedComponent(LinearGradient);
interface IProps {
    start?: number;
    end?: number;
}
const SkeletonLoading = ({ start = -200, end = 200 }: IProps) => {
    const animVal = useRef(new Animated.Value(0)).current;

    const translateX = animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [start, end],
    });

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animVal, {
                    useNativeDriver: true,
                    toValue: 1,
                    duration: 400,
                    easing: Easing.linear,
                }),
                Animated.delay(1000),
            ]),
        ).start();
    }, []);
    return (
        <AnimatedLinear
            colors={['#f7f7f7', '#f0f0f0', '#f0f0f0', '#f7f7f7']}
            style={[
                StyleSheet.absoluteFill,
                {
                    transform: [{ translateX: translateX }],
                },
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        />
    );
};

export default memo(SkeletonLoading);
