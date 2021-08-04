const SET_BOOK = 'SET_BOOK';
const SET_IS_READY = 'SET_IS_READY';


const initialState = {
    isReady: false,
    items: null,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            }
        default:
            return state;
    }
}