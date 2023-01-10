//UI
import React, { useEffect, useState, memo, useRef } from "react";
import { Box, Text, Input, Icon, Image, Button, Row, Center } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StyleSheet, TextInput, ScrollView, Animated, Platform, } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";


//Component

//Utils
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util";
import { lightColors, darkColors } from "../../styles/colors";


export const BigTextInput = ({ value, onChangeText, textColor = 'black', placeholder = "RandomTitle", placeholderColor = '#999999', style, keyboardType }) => {
    return (
        <Row w={'100%'} alignItems={'center'} pl={'14px'} borderColor={lightColors.LIGHT_BORDER} borderWidth={1} borderRadius={4} {...style} >
            <TextInput style={{ flex: 9, fontSize: 14, height: 48, }} placeholder={placeholder} placeholderColor={placeholderColor}
                onChangeText={text => onChangeText(text)} textColor={textColor} value={value} keyboardType={keyboardType} />
        </Row>


    )
}