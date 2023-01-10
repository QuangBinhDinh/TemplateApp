import { createNavigationContainerRef } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
};

const replace = (name, params) => {
    if (navigationRef.isReady) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
};

const pushNavigate = (name, params) => {
    if (navigationRef.isReady) {
        navigationRef.dispatch(StackActions.push(name, params));
    }
};

const goBack = () => {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
};

export { navigationRef, navigate, goBack, replace, pushNavigate };
