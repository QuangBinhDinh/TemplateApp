let _option;

/**
 * Mở modal app, truyền vào các giá trị option của SelectInput
 * @param {{}[]} data Aarray option truyền vào modal
 * @param {{id:number, name: string}} curValue Giá trị hiện tại đang được chọn
 * @param {string} title Header title của modal
 * @param {Function} onChange Hàm thay đổi giá trị input khi nhấn apply
 * @param {boolean} enableSearch Có hiển thị text search không
 */
const showModal = (data, curValue, title, onChange, enableSearch = false) => {
    _option?._showModal(data, curValue, title, onChange, enableSearch);
};

/**
 * Hàm đóng modal
 */
const hideModal = () => {
    _option?._hideModal();
};

const setService = ref => {
    _option = ref;
};
export default {
    showModal,
    setService,
    hideModal,
};
