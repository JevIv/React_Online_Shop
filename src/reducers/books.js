const SET_BOOK = 'SET_BOOK';
const ADD_BOOKS = 'ADD_BOOKS';


const initialState = {
    books: [{
        id:0,
        title: 'Hello World!'
    }]


}

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                books: action.payload
            };
        case ADD_BOOKS:
            return {
                books: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
}