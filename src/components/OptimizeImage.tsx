import { cdnImage } from '@util/index';
import React, { memo, useState } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getCustomTheme } from './hooks/getCustomTheme';
import SkeletonLoading from './SkeletonLoading';

const OptimizeImage = ({
    uri,
    style,
    cdn = true,
    width = 630,
    height = 630,
    fitIn = false,
}: {
    uri: string;
    style?: StyleProp<ViewStyle>;
    cdn?: boolean;
    width?: number;
    height?: number;
    fitIn?: boolean;
}) => {
    const optimizeUri = cdnImage(uri, width, height, fitIn);
    const { colors } = getCustomTheme();
    const [loadDone, setLoadDone] = useState(false);
    return (
        <View style={[{ width: '100%', height: '100%', backgroundColor: colors.LIGHT_BORDER }, style]}>
            {!loadDone ? <SkeletonLoading /> : null}
            <MemoImage uri={cdn == true ? optimizeUri : uri} setDone={setLoadDone} />
        </View>
    );
};

const MemoImage = memo(
    ({ uri, setDone }: { uri: string; setDone: (x: boolean) => void }) => {
        //console.log(uri);
        return (
            <FastImage
                onLoadEnd={() => {
                    setDone(true);
                }}
                style={{ width: '100%', height: '100%' }}
                source={{ uri: uri }}
                resizeMode={'cover'}
            />
        );
    },
    (prev, next) => prev.uri == next.uri,
);

export default memo(OptimizeImage);
