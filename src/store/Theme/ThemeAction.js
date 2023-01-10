export const THEME_TYPES = {
    SWITCH_THEME: 'SWITCH_THEME',
    LIGHT_THEME: 'LIGHT_THEME',
    DARK_THEME: 'DARK_THEME',
};

export const switchToLightTheme = payload => ({ type: THEME_TYPES.LIGHT_THEME });
export const switchToDarkTheme = payload => ({ type: THEME_TYPES.DARK_THEME });
