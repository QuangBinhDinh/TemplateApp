let _msg;
const showMessage = (message, bottom = 63) => {
    _msg?._showMessage(message, bottom);
};
const showError = (message, bottom = 63) => {
    _msg?._showError(message, bottom);
};
const showWarning = (message, bottom = 63) => {
    _msg?._showWarning(message, bottom);
};

const setService = ref => {
    _msg = ref;
};
export default {
    showMessage,
    setService,
    showError,
    showWarning,
};
