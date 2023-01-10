//UI
import React, { useState, memo, useRef } from 'react';
import { Icon, Image, Row } from 'native-base';
import { TouchableOpacity, View, TextInput, Text, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getCustomTheme } from './hooks/getCustomTheme';

//Utils
import { useBlur } from '@navigation/customHook';

const SearchInput = ({ leftButton = true, setSeachScreen = () => {}, keyword, setKeyword }) => {
    const { colors, fonts } = getCustomTheme();
    const [searchVisiblie, setSearchVisible] = useState(false);

    const inputRef = useRef();

    const showSearch = () => {
        setSearchVisible(true);
        setSeachScreen(true); //hiện màn hình search ở dưới
        inputRef.current?.focus();
    };
    const hideSearch = () => {
        setSearchVisible(false);
        setSeachScreen(false); //giấu màn search
        setKeyword(''); //reset input
        inputRef.current?.blur();
    };

    const renderSearchButton = () => {
        // render button search header
        if (!searchVisiblie)
            return (
                <TouchableOpacity
                    onPress={showSearch}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}
                >
                    <Icon as={<Ionicons name="search" />} size={6} color={colors.PRIMARY_COLOR} />
                </TouchableOpacity>
            );
        else
            return (
                <TouchableOpacity
                    onPress={hideSearch}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}
                >
                    <Icon as={<AntDesign name="left" />} color={'black'} size={5} />
                </TouchableOpacity>
            );
    };

    useBlur(() => hideSearch());

    return (
        <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999,
            }}
        >
            <Row
                w={'94%'}
                h={'48px'}
                style={{ backgroundColor: colors.GRAY_INPUT }}
                // borderWidth={1}
                borderRadius={60}
                overflow={'hidden'}
                alignItem={'center'}
            >
                {leftButton && renderSearchButton()}
                <Row flex={6} alignItems={'center'}>
                    <TextInput
                        style={{ width: '100%', marginLeft: !leftButton ? 20 : 0 }}
                        //placeholder={'Search for anything on Printerval'}
                        // placeholderTextColor={'gray'}
                        onChangeText={text => setKeyword(text)}
                        value={keyword}
                        fontSize={16}
                        fontFamily={fonts.mainFont}
                        fontWeight={'300'}
                        selectionColor={'black'}
                        ref={inputRef}
                        blurOnSubmit={false}
                        onFocus={() => {
                            setSearchVisible(true);
                            setSeachScreen(true);
                            //inputToGray();
                        }}
                    />
                    {
                        // render custom placeholder, chỉ hiện khi keyword rỗng
                        keyword == '' && (
                            <Row position={'absolute'} left={'5px'} alignItems={'center'} pointerEvents={'none'}>
                                <Text
                                    style={{
                                        marginLeft: !leftButton ? 20 : 0,
                                        fontSize: 16,
                                        color: 'grey',
                                    }}
                                >
                                    {'Search anything on '}
                                </Text>
                                <Image
                                    source={require('../assets/image/TextLogo.png')}
                                    w={'90px'}
                                    h={'18px'}
                                    mt={Platform.OS == 'ios' ? '-2px' : 0} //different font render in IOS and Android
                                />
                            </Row>
                        )
                    }
                </Row>
            </Row>
        </View>
    );
};

export default memo(SearchInput, (prev, next) => prev.keyword == next.keyword);
