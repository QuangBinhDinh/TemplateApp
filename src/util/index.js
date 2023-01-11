import { Alert, Dimensions } from 'react-native';
import { IMAGE_URL } from '@env';
import moment from 'moment';
import _, { isNumber } from 'lodash';
import { DIALOG_ICON, EXCLUDE_CDN_DOMAIN } from '@constants/index';
import { DialogService } from '@components/index';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

/**
 * Hàm chuyển đổi url ảnh để scale
 * @param {string} image_url url ảnh trả về
 * @param {number} width
 * @param {number} height
 * @param {fitIn} boolean
 * @returns
 */
const cdnImage = (image_url, width = 600, height = 600, fitIn = false) => {
    if (!image_url) return '';
    if (EXCLUDE_CDN_DOMAIN.some(str => image_url.includes(str))) return image_url;

    let suffix = image_url;

    suffix = suffix.replace('https://', '');
    suffix = suffix.replace('http://', '');

    if (suffix.includes('?')) suffix = encodeURIComponent(suffix);

    const fit = fitIn ? '/fit-in' : '';
    return `${IMAGE_URL}unsafe${fit}/${width}x${height}/${suffix}`;
};

const checkListEmpty = list => {
    if (list == undefined || list == null || !Array.isArray(list) || (Array.isArray(list) && list.length == 0))
        return true;
    else return fase;
};

const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const isEmptyString = string => {
    if (string == undefined || string == null || string == '') return true;
    else return false;
};

const convertDateTime = (string, mode = 'date') => {
    if (!string) return '';
    if (mode == 'date') return moment(string).format('ddd MMM Do YYYY');
    else if (mode == 'time') return moment(string).format('hh:mm:ss a');
    else if (mode == 'datetime') return moment(string).format('MMMM Do YYYY, h:mm:ss a');
    else if (mode == 'datemonth') return moment(string).format('MMM. Do');
    else return '';
};

const ArrayTwoRow = data => {
    //hàm này không đúng với trường hợp lẻ item
    let arrToPush = [];
    if (!data) return [];
    else
        return data.reduce((prev, next) => {
            arrToPush.push(next);
            if (arrToPush.length == 2) {
                prev.push(_.cloneDeep(arrToPush));
                arrToPush = [];
            }
            return prev;
        }, []);
};

const createSuffixParam = (prefix, params) => {
    //tạo paramater list cho api get
    let suffix = prefix + '?';
    if (typeof params == 'object') {
        Object.keys(params).forEach(item => {
            suffix = suffix + item + '=' + params[item] + '&';
        });
        suffix = suffix.substring(0, suffix.length - 1);
        // console.log("Suffix api: " + suffix)
        return suffix;
    } else return '';
};

// const formatPrice = priceNum => {
//     let localePrefix = '$';
//     if (isNumber(priceNum)) return formatter.format(priceNum);
//     else return localePrefix + priceNum;
// };

const showUnderDevelopment = (title = 'This feature is under development') => {
    DialogService.showDialog(
        {
            icon: DIALOG_ICON.INFO,
            style: 'submit',
            title: title,
        },
        {
            title: 'OK',
            style: 'submit',
        },
    );
};
/**
 * Hiện thị thời gian được bao lâu
 * @param {*} timeString kiểu date hay string đã được format
 * @returns
 */
const showTimeBefore = timeString => {
    let format = 'Vừa xong';
    var mins = moment(new Date()).diff(timeString, 'minutes');
    var duration = moment.duration(mins, 'minutes');
    if (mins < 60 && mins >= 1) format = mins + ' phút trước';
    else if (mins >= 60 && mins < 60 * 24) format = Math.floor(duration.asHours()) + ' giờ trước';
    else if (mins >= 60 * 24 && mins < 60 * 24 * 31) format = Math.floor(duration.asDays()) + ' ngày trước';
    else if (mins >= 60 * 24 * 31 && mins < 60 * 24 * 31 * 12)
        format = Math.floor(duration.asMonths()) + ' tháng trước';
    else if (mins > 60 * 24 * 31 * 12) format = Math.floor(duration.asYears()) + ' năm trước ';
    return format;
};
export {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    cdnImage,
    checkListEmpty,
    capitalizeFirstLetter,
    isEmptyString,
    convertDateTime,
    ArrayTwoRow,
    createSuffixParam,
    // formatPrice,
    showUnderDevelopment,
    showTimeBefore,
};
