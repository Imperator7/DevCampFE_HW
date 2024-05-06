import { combineReducers, legacy_createStore as createStore } from "redux";
import userReducer from "./reducers/userReducers";
import cartReducer from "./reducers/cartReducers";
const storeReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
  })

const persistState = loadState()

export const store = createStore(storeReducer, persistState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('store', JSON.stringify(state))
})


function loadState() {
    const state = localStorage.getItem('store');

    if (!state) return undefined;
    
    return JSON.parse(state)
}
// when initial application load state from browser and apply it to store