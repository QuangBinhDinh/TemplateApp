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
export const Loading = memo(({ apiName = [], visible }: IProps) => {
    const { apiCalling, apiCallingName } = useSelector(state => state.ApiReducer);
    if (visible == true)
        return (
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    zIndex: 600,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Lottie
                    style={{ width: 200, height: 200 }}
                    source={require('@assets/animation/Loading.json')}
                    autoPlay
                    loop
                />
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
                        backgroundColor: 'white',
                        zIndex: 600,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Lottie
                        style={{ width: 200, height: 200 }}
                        source={require('@assets/animation/Loading.json')}
                        autoPlay
                        loop
                    />
                </View>
            );
        else return <></>;
    }
});
