//UI
import React from 'react';
import { Box, Icon, Center } from 'native-base';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { lightColors } from '../../styles/colors';
import { debounce } from 'lodash';

//Component
import { FloatingInput, TextBigTitle, RadioRight, TextNormalBold } from '..';

//Utils
import { SCREEN_HEIGHT } from '../../util';
import PropTypes from 'prop-types';

const initialState = {
    visible: false,
    data: [],
    filterData: [],
    curValue: null,
    title: '',
    onChangeValue: () => {},
    showTime: 600,
    keyword: '',
    enableSearch: false,
};

class OptionModalApply extends React.Component {
    constructor(prop, context) {
        super(prop, context);

        this.state = initialState;
    }

    componentDidMount = () => {
        const { childRef } = this.props;
        childRef(this);
    };
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.keyword !== this.state.keyword) {
            const debounceFilter = debounce(() => {
                //thực hiện search province
                var lowerKeyword = this.state.keyword.toLowerCase().trim();
                var filtered = provinceList.filter(item => item.name.toLowerCase().includes(lowerKeyword));
                if (filtered.length > 0)
                    this.setState(state => ({
                        ...state,
                        filterData: filtered,
                    }));
            }, 100);

            if (this.state.keyword.trim() != '') debounceFilter();
            else
                this.setState(state => ({
                    ...state,
                    filterData: state.data,
                }));
        }
    };

    _showModal = (data, curValue, title, onChange, enableSearch = false) => {
        this.setState({
            visible: true,
            data: data,
            filterData: data,
            curValue: curValue,
            title: title,
            onChangeValue: onChange,
            enableSearch,
        });
    };
    _hideModal = () => {
        this.setState(initialState);
    };

    _submitValue = value => {
        this.state.onChangeValue(value);
        this.setState(initialState);
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
                        height: this.state.enableSearch ? SCREEN_HEIGHT * 0.75 : SCREEN_HEIGHT * 0.6,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        overflow: 'hidden',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 15,
                            paddingHorizontal: '4%',
                            width: '100%',
                        }}
                    >
                        <TextBigTitle style={{ fontSize: 16 }}>{this.state.title}</TextBigTitle>
                        <TouchableOpacity onPress={() => this._hideModal()}>
                            <Icon as={<AntDesign name="close" />} color={'black'} size={5} />
                        </TouchableOpacity>
                    </View>
                    {this.state.enableSearch && (
                        <View style={{ width: '100%', marginTop: 10 }}>
                            <FloatingInput
                                value={this.state.keyword}
                                onChangeText={value => this.setState(state => ({ ...state, keyword: value }))}
                                placeholder={'Enter to search'}
                            />
                        </View>
                    )}
                    <View style={{ flexGrow: 1, flexBasis: 1, paddingHorizontal: '4%' }}>
                        <RadioRight
                            data={this.state.data}
                            value={this.state.curValue}
                            activeColor={lightColors.PRIMARY_COLOR}
                            onChangeValue={curValue =>
                                this.setState(prev => ({
                                    ...prev,
                                    curValue,
                                }))
                            }
                        />
                        <Box h={'80px'}></Box>
                    </View>

                    {/*Apply button */}
                    <Box bg={'white'} w={'100%'} position={'absolute'} bottom={'0px'}>
                        <Center w={'100%'} py={'10px'}>
                            <TouchableOpacity
                                style={{
                                    width: '85%',
                                    height: SCREEN_HEIGHT / 15,
                                    borderRadius: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: this.state.curValue
                                        ? lightColors.PRIMARY_COLOR
                                        : lightColors.INACTIVE_COLOR,
                                }}
                                onPress={this._submitValue}
                                disabled={!this.state.curValue}
                            >
                                <TextNormalBold style={{ color: 'white' }}>Apply</TextNormalBold>
                            </TouchableOpacity>
                        </Center>
                        <Box w={'100%'} h={this.props.insets.bottom / 2} />
                    </Box>
                </View>
            </Modal>
        );
    }
}

OptionModalApply.propTypes = {
    childRef: PropTypes.func,
};

export default OptionModalApply;
