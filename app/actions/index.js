export const countUp = () => (dispatch/*, getState*/) => {
    dispatch({
        type: 'COUNT_UP'
    });
};

export const countDown = () => (dispatch/*, getState*/) => {
    dispatch({
        type: 'COUNT_DOWN'
    });
};

export const resetCounter = () => (dispatch/*, getState*/) => {
    dispatch({
        type: 'RESET_COUNTER'
    });
};
