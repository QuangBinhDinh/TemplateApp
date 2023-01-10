export const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let start = Date.now();
    let result = next(action);
    let end = Date.now();
    console.log('next state', store.getState());
    let executed = end - start;
    console.log('Time executed ' + executed + ' ms');
    console.groupEnd();
    return result;
}; // custom middleware by binhchili
// 12-Jul-2022
