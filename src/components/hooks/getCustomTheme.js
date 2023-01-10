import { useState } from "react";
import { useSelector } from "react-redux";
import { THEME_TYPES } from "../../store/Theme/ThemeAction";
import { lightTheme, darkTheme } from "../../styles";

export const getCustomTheme = () => {
    const curTheme = useSelector(state => state.ThemeReducer);

    if (curTheme.usingTheme == THEME_TYPES.LIGHT_THEME) return lightTheme
    else if (curTheme.usingTheme == THEME_TYPES.DARK_THEME) return darkTheme
    else return lightTheme
}