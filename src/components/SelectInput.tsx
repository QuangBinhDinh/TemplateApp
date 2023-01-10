//UI
import React from 'react';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Utils
import { lightColors } from '../styles/colors';
import { TextNormal } from './Text';
import { Nullable } from './type';
import { isEmptyString } from '../util';

interface IProps {
    value: Nullable<string>;
    onPress: () => void;
    placeholder: string;
}
export const SelectInput = ({ value, onPress, placeholder = 'RandomTitle' }: IProps) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 14,
                borderColor: lightColors.GRAY_BOLD,
                borderRadius: 60,
                borderWidth: 1,
            }}
            onPress={onPress}
        >
            <TextNormal
                style={{
                    marginLeft: '2%',
                    color: value ? 'black' : '#999999',
                }}
            >
                {isEmptyString(value) ? placeholder : value}
            </TextNormal>
            <Icon as={<AntDesign name="down" />} size={4} color={'black'} />
        </TouchableOpacity>
    );
};
