//UI
import React from 'react';
import { Icon } from 'native-base';
import { View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { lightColors } from '../../styles/colors';

//Component
import { TextLight, TextNormal, TextNormalBold } from '../../components';

//Utils
import { formatPrice } from '../../util';
import PropTypes from 'prop-types';

const initialState = {
    visible: false,
    data: [],
    curValue: null,
    onChangeValue: () => {},
    showTime: 600,
};

class OptionShipping extends React.Component {
    constructor(prop, context) {
        super(prop, context);

        this.state = initialState;
    }

    componentDidMount = () => {
        const { childRef } = this.props;
        childRef(this);
    };

    _showModal = (data, curValue, onChange) => {
        this.setState({
            visible: true,
            data: data,
            curValue: curValue,
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

    _renderRadio = item => {
        if (item.id == this.state.curValue?.id)
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

    render() {
        return (
            <Modal
                useNativeDriverForBackdrop
                useNativeDriver
                isVisible={this.state.visible}
                onBackdropPress={() => this._hideModal()}
                // swipeDirection={['down']}
                // onSwipeComplete={closeModal}
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
                    {this.state.data.map((item, index, arr) => (
                        <Pressable
                            style={{
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: index == arr.length - 1 ? 0 : 1,
                                borderBottomColor: lightColors.LIGHT_BORDER,
                            }}
                            key={item.id}
                            onPress={() => this._submitValue(item)}
                        >
                            <View
                                style={{
                                    flex: 7,
                                    justifyContent: 'center',
                                }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TextNormal>{item.title}</TextNormal>
                                    <TextNormalBold>{formatPrice(item.shipping_fee)}</TextNormalBold>
                                </View>
                                {/* <View style={{ flexDirection: 'row' }}>
                                        <TextNormal >{'Fee: '}</TextNormal>
                                        <TextNormalBold>{formatPrice(item.shipping_fee)}</TextNormalBold>
                                    </View> */}
                                <TextNormalBold>{`${item.min_date} - ${item.max_date}`}</TextNormalBold>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    <Icon as={<AntDesign name="check" />} size={4} color={this.props.activeColor} />
                                    <TextLight style={{ marginLeft: 1 }}>Delivery date guaranteed</TextLight>
                                    <Icon
                                        as={<AntDesign name="check" />}
                                        size={4}
                                        color={this.props.activeColor}
                                        ml={'8px'}
                                    />
                                    <TextLight style={{ marginLeft: 1 }}>Tracking number</TextLight>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}
                            >
                                {this._renderRadio(item)}
                            </View>
                        </Pressable>
                    ))}
                    <View style={{ height: this.props.insets.bottom / 2 }} />
                </View>
            </Modal>
        );
    }
}

OptionShipping.propTypes = {
    childRef: PropTypes.func,
};

export default OptionShipping;
