export default function counterValue(state = 0, action) {
    switch (action.type) {
        case 'COUNT_UP': {
            return state + 1;
        }
        case 'COUNT_DOWN': {
            return state - 1;
        }
        case 'RESET_COUNTER': {
            return 0;
        }
        default: {
            return state;
        }
    }
}
