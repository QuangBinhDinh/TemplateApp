import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationScreen from '../../modules/Notification';
import { getCustomTheme } from '../../components';
import CustomTabBar from './CustomTabBar';
import { Bell, BellFill } from '../../assets/image/Svg';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    const { colors, fonts } = getCustomTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={props => <CustomTabBar {...props} />}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                options={{
                    title: 'Updates',
                    tabBarIcon: ({ focused }) => {
                        if (focused) return <BellFill width={18} height={18} />;
                        else return <Bell width={18} height={18} />;
                    },
                }}
                name="Notify"
                component={NotificationScreen}
            />
        </Tab.Navigator>
    );
};
export default BottomTabs;
