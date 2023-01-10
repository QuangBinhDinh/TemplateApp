import { DIALOG_ICON, } from "@constants/index";

let _option;

/**
 * Mở dialog thông báo 
 * @param {{icon: string, style: string, title: string}} header title dialog 

 * @param {{title: string, style: string, onPress?: function }} submitButton hàm khi nhấn submit 
 *  @param {{title: string, style: string }} cancelButton hàm khi nhấn cancel 
 */
const showDialog = (header, submitButton, cancelButton = null) => {
    _option?._showDialog(header, submitButton, cancelButton)
}

const showUnexpectedError = (title = "") => {
    _option?._showDialog(
        {
            icon: DIALOG_ICON.FAILED,
            style: 'destructive',
            title: 'An unexpected error occured !',
        },
        {
            title: 'OK',
            style: 'destructive',
        },
        null
    )
}

const setService = (ref) => {
    _option = ref;
}
export default {
    showDialog, showUnexpectedError,
    setService,
}