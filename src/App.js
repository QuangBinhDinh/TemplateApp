import Router from './navigation';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Provider } from 'react-redux';
import { Platform, LogBox } from 'react-native';
import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import Store from './store/store';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appsFlyer from 'react-native-appsflyer';
LogBox.ignoreAllLogs(); //Ignore all log notifications

// import { customTheme } from "./styles";
const theme = extendTheme({
    // colors: {
    //     primary: '#ff7300'
    // },
    fontConfig: {
        KeepCalm: {
            100: {
                normal: 'KeepCalm-Medium',
            },
            200: {
                normal: 'KeepCalm-Medium',
            },
            300: {
                normal: 'KeepCalm-Medium',
            },
            400: {
                normal: 'KeepCalm-Medium',
            },
            500: {
                normal: 'KeepCalm-Medium',
            },
            600: {
                normal: 'KeepCalm-Medium',
            },
            700: {
                normal: 'KeepCalm-Medium',
            },
            800: {
                normal: 'KeepCalm-Medium',
            },
            900: {
                normal: 'KeepCalm-Medium',
            },
        },
        Heebo: {
            100: {
                normal: Platform.select({
                    ios: 'Heebo-Light',
                    android: 'heebo.light',
                }),
            },
            200: {
                normal: Platform.select({
                    ios: 'Heebo-Light',
                    android: 'heebo.light',
                }),
            },
            300: {
                normal: Platform.select({
                    ios: 'Heebo-Light',
                    android: 'heebo.light',
                }),
            },
            400: {
                normal: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
            },
            500: {
                normal: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
            },
            600: {
                normal: Platform.select({
                    ios: 'Heebo-Regular',
                    android: 'heebo.regular',
                }),
            },
            700: {
                normal: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
            },
            800: {
                normal: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
            },
            900: {
                normal: Platform.select({
                    ios: 'Heebo-Medium',
                    android: 'heebo.medium',
                }),
            },
        },
    },
    fonts: {
        section: 'KeepCalm',
        mainFont: 'Heebo',
    },
});

if (!__DEV__) {
    console.log = () => null;
    console.group = () => null;
    console.info = () => null;
}

appsFlyer.initSdk(
    {
        devKey: 'k7FuRtJwqsKiFx2eVKB7E7',
        isDebug: false,
        appId: '1642438715',
        timeToWaitForATTUserAuthorization: 10, //for iOS 14.5
    },
    result => {
        console.log(result);
    },
    error => {
        console.error(error);
    },
);
GoogleSignin.configure({
    webClientId: '1066661762461-ojsjpaf0dqup6reb3s0g7fnc5jis3c4u.apps.googleusercontent.com',
});
const App = () => {
    const onAuthStateChanged = user => {
        // console.log('User sign in !!!');
        // console.log(user);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    return (
        <Provider store={Store}>
            <NativeBaseProvider theme={theme}>
                <Router></Router>
            </NativeBaseProvider>
        </Provider>
    );
};

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
export default App;
