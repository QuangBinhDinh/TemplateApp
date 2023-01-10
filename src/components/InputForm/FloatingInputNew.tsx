import React, { useRef } from 'react';
import { View, Platform } from 'react-native';

import { FloatingLabelInput, FloatingLabelProps } from 'react-native-floating-label-input';

import { useInputContext } from './context';
import { getCustomTheme } from '../hooks/getCustomTheme';
import { TextSmall } from '@components/index';
// import { InputContext } from './context';
// import { lightColors } from "../../styles/colors";

type IProps = FloatingLabelProps & {
    /** Unique key của input, dùng để set value */
    fieldName: string;
};
const FloatingInputNew = ({ fieldName, label, ...rest }: IProps) => {
    const { colors } = getCustomTheme();
    const { setFieldName, input, error } = useInputContext();
    const inputRef = useRef<any>();

    const showErr = error != null && error[fieldName] != undefined;
    return (
        <View>
            <FloatingLabelInput
                ref={inputRef}
                label={label}
                inputStyles={{
                    fontSize: 14,
                    height: 48,
                    paddingLeft: 4.5,
                    fontFamily: Platform.select({
                        ios: 'Heebo-Regular',
                        android: 'heebo.regular',
                    }),
                }}
                customLabelStyles={{
                    colorFocused: '#000000',
                    colorBlurred: colors.DARK_BORDER,
                    fontSizeBlurred: 14,
                    topFocused: -16,
                    leftFocused: 5,
                }}
                value={input[fieldName]}
                onChangeText={setFieldName(fieldName)}
                containerStyles={{
                    paddingLeft: 10,
                    borderWidth: 1,
                    borderColor: showErr ? 'red' : colors.LIGHT_BORDER,
                    borderRadius: 8,
                }}
                {...rest}
            />
            {showErr && (
                <TextSmall style={{ color: 'red', marginTop: 4, marginLeft: 15 }}>{error[fieldName]}</TextSmall>
            )}
        </View>
    );
};

export default FloatingInputNew;
