// export const fontConfig = {
//     KeepCalm: "KeepCalm-Medium",
// }

import { Platform } from 'react-native';

export const boldFont = Platform.select({
    ios: 'Heebo-Medium',
    android: 'heebo.medium',
});
export const normalFont = Platform.select({
    ios: 'Heebo-Regular',
    android: 'heebo.regular',
});
export const lightFont = Platform.select({
    ios: 'Heebo-Light',
    android: 'heebo.light',
});

export const fonts = {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
    mainFont: 'Heebo',
    bigCategory: 'Heebo',
    sectionTitle: 'Heebo-Medium',
    normal: 'Heebo-Regular',
    bold: 'Heebo-Medium',
    schoolStyle: 'KGWhYyOuGoTtABeSoMeAn',
};
export const fontSize = {
    sectionTitle: 20,
    sectionTitlePx: '20px',
    subTitle: 18,
    subTitlePx: '18px',
    detailTitle: 14,
    detailTitlePx: '14px',
    normal: 12,
    normalPx: '12px',
};
