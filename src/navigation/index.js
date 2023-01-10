import React, { useRef } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './AppNavigator';
import { navigationRef } from './service';
import {
    OptionModal,
    OptionModalService,
    OptionShipping,
    OptionShippingService,
    BottomMessage,
    BottomMsgService,
    Dialog,
    DialogService,
} from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SplashScreen from '../Splash';
import OptionAddress from '@components/OptionAddress';
import OptionAddressService from '@components/OptionAddress/OptionAddressService';
import { getCustomTheme } from '../components';
const Stack = createStackNavigator();

const Router = () => {
    const { colors } = getCustomTheme();
    const insets = useSafeAreaInsets();
    const routeNameRef = useRef();
    const onNavigationStateChange = async state => {
        const currentScreen = navigationRef.getCurrentRoute().name;
        const params = state?.routes[state?.index]?.params;
        // await analytics().logScreenView({
        //     screen_name: currentScreen,
        //     screen_class: currentScreen,
        // });
        // crashlytics().log(`${currentScreen}?${qs.stringify(params || {})}`);
        if (routeNameRef.current == currentScreen) return; // nếu navigate đến chính màn đó
        routeNameRef.current = currentScreen;
    };
    return (
        <NavigationContainer ref={navigationRef} onStateChange={onNavigationStateChange}>
            {/* <StatusBar backgroundColor={barColor} barStyle={iconColor} /> */}
            <OptionModal childRef={ref => OptionModalService.setService(ref)} insets={insets} />
            <OptionAddress
                childRef={ref => OptionAddressService.setService(ref)}
                insets={insets}
                activeColor={colors.PRIMARY_COLOR}
            />
            <OptionShipping
                childRef={ref => OptionShippingService.setService(ref)}
                insets={insets}
                activeColor={colors.BLUE_SKY}
            />
            <BottomMessage childRef={ref => BottomMsgService.setService(ref)} insets={insets} />
            <Dialog childRef={ref => DialogService.setService(ref)} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <Stack.Screen name="App" component={BottomTabs} />
                <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
