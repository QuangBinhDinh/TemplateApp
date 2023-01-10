import React from 'react';

import { Animated, Text, StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../util';
import PropTypes from 'prop-types';
import { TextNormal, TextNormalBold, TextSubtitleBold, TextSubtitle } from '../Text';
import { Icon } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';

class BottomMessage extends React.Component {
    constructor(prop, context) {
        super(prop, context);

        this.animRef = React.createRef();
        this.state = {
            message: '',
            opacity: new Animated.Value(0),
            marginBottom: 63,
            visible: false,
            color: '#22be79',
            icon: 'checkcircleo',
        };
    }

    componentDidMount = () => {
        const { childRef } = this.props;
        childRef(this);
    };

    _showMessage(message, bottom) {
        if (this.state.visible) return;
        this.setState({
            ...this.state,
            message: message,
            marginBottom: bottom,
            visible: true,
            color: '#22be79',
            icon: 'checkcircleo',
        });
        this.fadeAnim();
    }

    _showWarning(message, bottom) {
        if (this.state.visible) return;
        this.setState({
            ...this.state,
            message: message,
            marginBottom: bottom,
            visible: true,
            color: '#ffbc59',
            icon: 'exclamationcircleo',
        });
        this.fadeAnim();
    }

    _showError(message, bottom) {
        if (this.state.visible) return;
        this.setState({
            ...this.state,
            message: message,
            marginBottom: bottom,
            visible: true,
            color: '#ff3945',
            icon: 'closecircleo',
        });
        this.fadeAnim();
    }

    // fadeAnim() {
    //     Animated.sequence([
    //         // Animated.delay(500),
    //         Animated.timing(this.state.opacity, {
    //             toValue: 1,
    //             duration: 500,
    //             useNativeDriver: true,
    //         }),
    //         Animated.delay(this.state.showTime),
    //         Animated.timing(this.state.opacity, {
    //             toValue: 0,
    //             duration: 500,
    //             useNativeDriver: true,
    //         }),
    //     ]).start();
    // }

    async fadeAnim() {
        let fadeDown;
        var fadeUp = await this.animRef.current?.fadeIn(500);
        if (fadeUp?.finished) fadeDown = await this.animRef.current?.fadeOut(800, 1200);
        if (fadeDown?.finished) this.setState(prev => ({ ...prev, visible: false }));
    }

    async shakeAnim() {
        let fadeDown;
        var shake = await this.animRef.current?.shake();
        if (shake?.finished) fadeDown = await this.animRef.current?.fadeOut(800, 1200);
        if (fadeDown?.finished) this.setState(prev => ({ ...prev, visible: false }));
    }
    render() {
        return (
            <Animatable.View
                style={[
                    styles.littlePop,
                    {
                        opacity: this.state.visible ? 1 : 0,
                        backgroundColor: this.state.color,
                        bottom: this.state.marginBottom + this.props.insets.bottom / 1.5,
                    },
                ]}
                pointerEvents={'none'}
                ref={this.animRef}
                useNativeDriver={true}
            >
                <TextNormalBold style={{ color: 'white', fontSize: 15 }}>{this.state.message}</TextNormalBold>
                <Icon type="antdesign" name={this.state.icon} color={'white'} size={22} style={{ marginLeft: 15 }} />
            </Animatable.View>
        );
    }
}
const styles = StyleSheet.create({
    littlePop: {
        paddingHorizontal: '4%',
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        opacity: 0.4,
        height: 52,
        width: SCREEN_WIDTH * 0.94,
        zIndex: 999,
    },
});
BottomMessage.propTypes = {
    childRef: PropTypes.func,
};

export default BottomMessage;
