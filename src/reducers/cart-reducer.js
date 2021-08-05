const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


const initialState = {
    items: []
};

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            }
            break;
        default:
            return state;
    }
}