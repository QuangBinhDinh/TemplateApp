import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

export const useMessaging = () => {
    useEffect(() => {
        const requestUserPermission = async () => {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
            if (enabled) {
                console.log('Authorization status:', authStatus);
            }
        };

        requestUserPermission();
    }, []);
};
