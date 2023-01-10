import React from 'react';
import { View, Platform, Pressable, Keyboard } from 'react-native';
import { Icon } from '@rneui/themed';
import { FloatingLabelInput, FloatingLabelProps } from 'react-native-floating-label-input';
import { OptionModalService } from '@components/index';
import { lightColors } from '../../styles/colors';
import { TextSmall } from '../Text';
import { getCustomTheme } from '../hooks/getCustomTheme';
import { useInputContext } from './context';
// import { lightColors } from "../../styles/colors";

type IProps = FloatingLabelProps & {
    /** Unique key của input, dùng để set value */
    fieldName: string;
    label: string;
    data: any[];
    searchable?: boolean;
};
const FloatingOptionNew = ({ label, fieldName, data, searchable = false, ...rest }: IProps) => {
    const { colors } = getCustomTheme();
    const { input, setFieldName, error } = useInputContext();
    const openSelect = () => {
        Keyboard.dismiss();
        OptionModalService.showModal(data, input[fieldName], label, setFieldName(fieldName), searchable);
    };
    const showErr = error != null && error[fieldName] != undefined;
    return (
        <>
            <Pressable style={{ height: 48, width: '100%', flexDirection: 'row' }} onPress={openSelect}>
                <View pointerEvents="none" style={{ flex: 1 }}>
                    <FloatingLabelInput
                        // ref={ref}
                        editable={false}
                        label={label}
                        inputStyles={{
                            fontSize: 14,
                            height: 48,
                            width: '100%',
                            paddingLeft: 4.5,
                            fontFamily: Platform.select({
                                ios: 'Heebo-Regular',
                                android: 'heebo.regular',
                            }),
                        }}
                        customLabelStyles={{
                            colorFocused: '#000000',
                            colorBlurred: lightColors.DARK_BORDER,
                            fontSizeBlurred: 14,
                            topFocused: -16,
                            leftFocused: 5,
                        }}
                        value={input[fieldName].name}
                        containerStyles={{
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderColor: showErr ? 'red' : colors.LIGHT_BORDER,
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
            {showErr && (
                <TextSmall style={{ color: 'red', marginTop: 4, marginLeft: 15 }}>{error[fieldName]}</TextSmall>
            )}
        </>
    );
};

export default FloatingOptionNew;
