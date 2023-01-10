//UI
import React from 'react';
import { Icon } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { lightColors } from '../../styles/colors';

//Component
import { TextNormalBold, TextSubtitleBold } from '@components';

//Utils
import PropTypes from 'prop-types';
import { DIALOG_ICON } from '@constants/index';

const initialState = {
    visible: false,
    titleIcon: '',
    headerColor: '',
    subtitle: '',

    onSubmit: () => {},
    onCancel: () => {},
    submitTitle: '',
    submitStyle: '',

    cancelTitle: '',
    cancelStyle: '',
    showTime: 600,
};

class Dialog extends React.Component {
    constructor(prop, context) {
        super(prop, context);
        this.state = initialState;
    }
    componentDidMount = () => {
        const { childRef } = this.props;
        childRef(this);
    };
    _showDialog = (header, submitButton, cancelButton) => {
        let newState = {
            visible: true,
            titleIcon: header.icon,
            headerColor: header.style,
            subtitle: header.title,
            onSubmit: submitButton.onPress,
            submitTitle: submitButton.title,
            submitStyle: submitButton.style,
        };
        if (cancelButton) {
            newState.onCancel = cancelButton.onPress;
            newState.cancelTitle = cancelButton.title;
            newState.cancelStyle = cancelButton.style;
        } else newState.cancelStyle = '';
        this.setState(prevState => ({ ...prevState, ...newState }));
    };
    _hideModal = () => {
        this.setState(prev => ({ ...prev, visible: false }));
        //setTimeout(() => this.setState(initialState), 500)
    };
    _onSubmit = () => {
        if (this.state.onSubmit) this.state.onSubmit();

        this.setState(prev => ({ ...prev, visible: false }));
    };

    getTextColor = style => {
        if (style == 'submit') return lightColors.PRIMARY_COLOR;
        else if (style == 'cancel') return lightColors.GRAY_BOLD;
        else if (style == 'destructive') return lightColors.FOCUS_BUTTON;
        else return 'black';
    };

    render() {
        return (
            <Modal
                useNativeDriverForBackdrop
                useNativeDriver
                hideModalContentWhileAnimating
                isVisible={this.state.visible}
                onBackdropPress={() => this._hideModal()}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                style={{
                    justifyContent: 'center',
                    margin: 0,
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        width: '85%',
                        backgroundColor: 'white',
                        borderRadius: 12,
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: 15,
                            paddingBottom: 25,
                            paddingHorizontal: '4%',
                            backgroundColor: this.getTextColor(this.state.headerColor),
                        }}
                    >
                        <HeaderIcon icon={this.state.titleIcon} />
                        <TextSubtitleBold style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                            {this.state.subtitle}
                        </TextSubtitleBold>
                    </View>
                    <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
                        {this.state.cancelStyle != '' ? (
                            <TouchableOpacity
                                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => {
                                    if (this.state.onCancel) this.state.onCancel();
                                    this._hideModal();
                                }}
                            >
                                <TextNormalBold style={{ color: this.getTextColor(this.state.cancelStyle) }}>
                                    {this.state.cancelTitle}
                                </TextNormalBold>
                            </TouchableOpacity>
                        ) : null}
                        <TouchableOpacity
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                            onPress={this._onSubmit}
                        >
                            <TextNormalBold style={{ color: this.getTextColor(this.state.submitStyle) }}>
                                {this.state.submitTitle}
                            </TextNormalBold>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const HeaderIcon = ({ icon }) => {
    if (icon == DIALOG_ICON.TRASH) return <Icon type="feather" name="trash" color="white" size={50} />;
    else if (icon == DIALOG_ICON.FAILED)
        return <Icon type="material-community" name="emoticon-sad-outline" color="white" size={50} />;
    else if (icon == DIALOG_ICON.LOGOUT) return <Icon type="material" name="logout" color="white" size={50} />;
    else if (icon == DIALOG_ICON.INFO) return <Icon type="feather" name="info" color="white" size={50} />;
    else return null;
};

Dialog.propTypes = {
    childRef: PropTypes.func,
};

export default Dialog;
