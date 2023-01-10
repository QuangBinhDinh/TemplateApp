let _option;

/**
 * Hiện option chọn address 
 * @param {any[]} data Mảng address book của user 
 * @param {number} index index đang được select 
 * @param {Function} onChange Hàm thay đổi giá trị input khi nhấn apply
 */
const showModal = (data, index, onChange) => {
    _option?._showModal(data, index, onChange)
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