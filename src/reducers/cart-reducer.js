const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';


const initialState = {
    items: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
            };
        case REMOVE_BOOK:
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            }
            break;
        default:
            return state;
    }
}