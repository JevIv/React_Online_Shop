const SET_BOOK = 'SET_BOOK';
const SET_IS_READY = 'SET_IS_READY';
const ADD_BOOKS = 'ADD_BOOKS';


const initialState = {
    isReady: false,
    books: null,
};

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                books: action.payload,
                isReady: true,
            };
/*        case ADD_BOOKS:
            return {
                books: [
                    ...state.books,
                    action.payload
                ]
            };*/
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            }
            break;
        default:
            return state;
    }
}