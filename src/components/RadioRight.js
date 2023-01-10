import React, { memo, useEffect } from 'react';
import { Box, Row, Text, Center } from 'native-base';
import { TextNormal, TextSubtitle } from './Text';
import { getCustomTheme } from './hooks/getCustomTheme';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';

/**
 * @callback changeValue truyền value vào callback khi select radio
 * @param {string|number} passValue
 */
/**
 * @param {object} param0
 * @param {{id : number, name : string }[]} param0.data Mảng option truyền vào , object có 2 field title và value
 * @param {{id:number, name: string}} param0.value Giá trị đang được selected
 * @param {changeValue} param0.onChangeValue Callback truyền vào khi select radio
 * @param {string} param0.activeColor Màu radio khi được select
 * @param {Object} param0.style Style của container bên ngoài group radio
 * @returns
 */
const RadioRight = memo(
    ({ data, value, onChangeValue, activeColor, style }) => {
        const { colors } = getCustomTheme();
        console.log('Re-render');
        const renderRadio = item => {
            if (item.id == value?.id)
                return (
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            width: 25,
                            height: 25,
                            overflow: 'hidden',
                            borderColor: activeColor,
                            borderWidth: 2,
                            borderRadius: 60,
                        }}
                    >
                        <View
                            style={{
                                width: '70%',
                                height: '70%',
                                backgroundColor: activeColor,
                                borderRadius: 60,
                            }}
                        />
                    </View>
                );
            else
                return (
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            width: 25,
                            height: 25,
                            overflow: 'hidden',
                            borderColor: colors.DARK_BORDER,
                            borderRadius: 60,
                            borderWidth: 2,
                        }}
                    />
                );
        };

        const renderOption = ({ item }) => (
            <Pressable
                key={item.id}
                onPress={() =>
                    onChangeValue({
                        id: item.id,
                        name: item.name,
                    })
                }
                style={{
                    paddingVertical: 15,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <TextSubtitle>{item.name}</TextSubtitle>
                {renderRadio(item)}
            </Pressable>
        );
        //console.log("render")
        return (
            <FlatList
                style={{ width: '100%', heigh: '100%' }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderOption}
                keyExtractor={item => item.id}
                ListFooterComponent={<View style={{ height: 60 }} />}
                // updateCellsBatchingPeriod={150}
            />
        );
    },
    (prev, next) => _.isEqual(prev.data, next.data) && _.isEqual(prev.value, next.value)
);

export default RadioRight;
