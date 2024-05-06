import { cloneDeep } from "../../helpers/utility";
import { ADD_TO_CART, REMOVE_ITEM } from "../actiontypes";

const addItemToCart = (state, action) => {
    const newState = cloneDeep(state);
    newState.itemList.push(action.payload.item)
    return newState
}

const removeItem = (state, action) => {
    const newState = cloneDeep(state)
    newState.itemList = newState.itemList.filter((item) => item.id !== action.payload.id)
    return newState
}

const initialState = {itemList: []}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addItemToCart(state, action)
        case REMOVE_ITEM:
            return removeItem(state, action)
        default:
            return state
    }
  }

export default cartReducer