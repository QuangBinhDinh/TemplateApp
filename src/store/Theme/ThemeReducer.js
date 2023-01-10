import { THEME_TYPES } from './ThemeAction';

const initialState = {
    usingTheme: THEME_TYPES.LIGHT_THEME,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case THEME_TYPES.LIGHT_THEME:
            return { ...state, usingTheme: THEME_TYPES.LIGHT_THEME };
        case THEME_TYPES.DARK_THEME:
            return { ...state, usingTheme: THEME_TYPES.DARK_THEME };
        default:
            return state;
    }
    s;
};
