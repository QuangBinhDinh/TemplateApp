import navigationReducer from '@navigation/reducer';
import { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { pushNavigate, navigate } from '@navigation/service';

export const useDeepLink = () => {
    const { setProductIdDeepLink } = navigationReducer.actions;
    const dispatch = useDispatch();

    const setProductDeepLink = url => {
        //handle deeplink appsflyer
        if (!url) return;
        const paramList = url.slice(url.indexOf('HGvy') + 4);
        const productIdParam = paramList.split('&').filter(str => str.includes('productId'))[0];

        if (!productIdParam) return;
        var productId = productIdParam.slice(10);
        if (productId && productId != '0') dispatch(setProductIdDeepLink(productId));
    };

    useEffect(() => {
        const listenUrl = Linking.addEventListener('url', url => {
            console.log('Incoming link');
            setProductDeepLink(url.url);
        });
        return () => listenUrl.remove();
    }, []);

    useEffect(() => {
        const getUrlAsync = async () => {
            const initialUrl = await Linking.getInitialURL();
            console.log('Incoming link');
            setProductDeepLink(initialUrl);
        };
        getUrlAsync();
    }, []);
};
