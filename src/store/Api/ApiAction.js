export const TYPES = {
    BEGIN: 'BEGIN',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
};

export const beginCallApi = (key, payload) => ({ type: TYPES.BEGIN + '_' + key, payload });
export const apiCallSuccess = (key, payload) => ({ type: key + '_' + TYPES.SUCCESS, payload });
export const apiCallFail = (key, payload) => ({ type: key + '_' + TYPES.FAIL, payload });
