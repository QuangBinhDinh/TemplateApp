import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../util';
import { getCustomTheme, TextNormal } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { commonStyle } from '../../styles';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();
    const { colors } = getCustomTheme();

    return (
        <View>
            <View
                style={{
                    width: SCREEN_WIDTH,
                    height: 64,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    ...commonStyle.shadowTop,
                }}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                        >
                            {options.tabBarIcon({ focused: isFocused })}
                            <TextNormal
                                style={{
                                    color: isFocused ? colors.FOCUSED_TAB_BAR : colors.UNFOCUSED_TAB_BAR,
                                    marginTop: '5%',
                                    fontSize: 12,
                                }}
                            >
                                {label}
                            </TextNormal>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={{ width: SCREEN_WIDTH, height: insets.bottom / 3, backgroundColor: 'white' }} />
        </View>
    );
};

export default CustomTabBar;
