import { LOGIN, LOGOUT} from "../actiontypes";
import { cloneDeep } from "../../helpers/utility";

const initialState = {username: '', userImg: null}

const logUserIn = (state, action) => {
    const newState = cloneDeep(state)
      newState.username = action.payload.username;
      newState.userImg = action.payload.userImg;
      return newState
}

const logUserOut = (state) => {
    const newState = cloneDeep(state);
      newState.username = ''
      newState.userImg = null
      return newState
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return logUserIn(state, action)
        case LOGOUT:
            return logUserOut(state)
        default:
            return state
    }
  }

export default userReducer