import {combineReducers} from "redux";
import books from './books-reducer'
import cart from './cart-reducer'
import filter from './filter-reducer'


export default combineReducers({
        books,
        cart,
        filter
});