import React, { memo } from 'react';
import { Box, Center } from 'native-base';
import { View } from 'native-base';
import Lottie from 'lottie-react-native';
import { useLoading } from '../hooks/useLoading';
import { useSelector } from 'react-redux';

interface IProps {
    /**
     * Truyền vào tên các api call để chỉ hiển thị loading khi đc call
     */
    apiName?: string[];

    /**
     * Hiển thị loading hay không (sẽ overide param apiName)
     */
    visible?: boolean | undefined;
}
export const BlurLoading = memo(({ apiName = [], visible }: IProps) => {
    const { apiCalling, apiCallingName } = useSelector(state => state.ApiReducer);
    if (visible == true)
        return (
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(239,239,239,0.7)',
                    zIndex: 400,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                }}
            >
                <View
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 12,
                        backgroundColor: 'white',
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Lottie
                        style={{ width: 120, height: 120 }}
                        source={require('@assets/animation/LoadingDot.json')}
                        autoPlay
                        speed={1.2}
                        loop
                    />
                </View>
            </View>
        );
    else if (visible == false) return <></>;
    else {
        //trường hợp vẫn còn api đang call thì hiển thị loading
        if (apiCallingName.some((item: any) => apiName.includes(item)))
            return (
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(239,239,239,0.7)',
                        zIndex: 400,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                    }}
                >
                    <View
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 12,
                            backgroundColor: 'white',
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Lottie
                            style={{ width: 120, height: 120 }}
                            source={require('@assets/animation/LoadingDot.json')}
                            autoPlay
                            speed={1.2}
                            loop
                        />
                    </View>
                </View>
            );
        else return <></>;
    }
});
