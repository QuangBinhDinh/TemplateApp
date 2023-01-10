//UI
import React from 'react';
import { View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { lightColors } from '../../styles/colors';

//Component
import { TextBigTitle, TextNormal, TextNormalBold } from '@components';

//Utils
import PropTypes from 'prop-types';

const initialState = {
    visible: false,
    data: [],
    curIndex: null,
    onChangeValue: () => {},
    showTime: 600,
};

//thay vì lưu cả item giờ chỉ lưu index đang được select
class OptionAddress extends React.Component {
    constructor(prop, context) {
        super(prop, context);

        this.state = initialState;
    }

    componentDidMount = () => {
        const { childRef } = this.props;
        childRef(this);
    };

    _showModal = (data, curIndex, onChange) => {
        this.setState({
            visible: true,
            data: data,
            curIndex: curIndex,
            onChangeValue: onChange,
        });
    };
    _hideModal = () => {
        this.setState(initialState);
    };
    _submitValue = value => {
        this.state.onChangeValue(value);
        this.setState(initialState);
    };

    _renderRadio = index => {
        if (index == this.state.curIndex)
            return (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width: 24,
                        height: 24,
                        overflow: 'hidden',
                        borderColor: this.props.activeColor,
                        borderWidth: 2,
                        borderRadius: 60,
                    }}
                >
                    <View
                        style={{
                            width: '70%',
                            height: '70%',
                            backgroundColor: this.props.activeColor,
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
                        width: 24,
                        height: 24,
                        overflow: 'hidden',
                        borderColor: lightColors.DARK_BORDER,
                        borderRadius: 60,
                        borderWidth: 2,
                    }}
                />
            );
    };

    _getAddressText = item => {
        let address = item.country.nicename + ', ';
        if (item.province?.name) address = address + item.province.name + ', ';
        if (item.city_name) address = address + item.city_name + ', ';
        if (item.address) address = address + item.address;

        return address;
    };

    render() {
        return (
            <Modal
                useNativeDriverForBackdrop
                useNativeDriver
                isVisible={this.state.visible}
                onBackdropPress={() => this._hideModal()}
                hideModalContentWhileAnimating
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
            >
                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: '4%',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        paddingTop: 10,
                    }}
                >
                    <TextBigTitle>{'Select address'}</TextBigTitle>
                    {this.state.data.map((item, index, arr) => (
                        <Pressable
                            style={{
                                width: '100%',
                                height: 80,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: index == arr.length - 1 ? 0 : 1,
                                borderBottomColor: lightColors.LIGHT_BORDER,
                            }}
                            key={item.id}
                            onPress={() => this._submitValue(index)}
                        >
                            <View
                                style={{
                                    flex: 7,
                                    justifyContent: 'center',
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextNormal>{item.full_name}</TextNormal>
                                    <TextNormal style={{ marginLeft: 8 }}>{item.phone}</TextNormal>
                                </View>
                                <TextNormalBold style={{ color: this.props.activeColor, marginTop: 2, fontSize: 12 }}>
                                    {this._getAddressText(item)}
                                </TextNormalBold>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}
                            >
                                {this._renderRadio(index)}
                            </View>
                        </Pressable>
                    ))}
                    <View style={{ height: this.props.insets.bottom / 2 + 10 }} />
                </View>
            </Modal>
        );
    }
}

OptionAddress.propTypes = {
    childRef: PropTypes.func,
};

export default OptionAddress;
