let _option;

/**
 * Mở modal app, truyền vào các giá trị option của SelectInput
 * @param {any[]} data Aarray option truyền vào modal
 * @param {string|number} curValue Giá trị hiện tại đang được chọn
 * @param {Function} onChange Hàm thay đổi giá trị input khi nhấn apply
 */
const showModal = (data, curValue, onChange) => {
    _option?._showModal(data, curValue, onChange)
}

/**
 * Hàm đóng modal 
 */
const hideModal = () => {
    _option?._hideModal();
}

const setService = (ref) => {
    _option = ref;
}
export default {
    showModal,
    setService,
    hideModal
}