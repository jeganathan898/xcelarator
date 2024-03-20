import { ACTION } from "./actionTypes";
import { IInitialState } from "./interface"

const initialState: IInitialState = {
  is_authenticated: false,
  collapse: false,
}

const BasicReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ACTION.IS_AUTHENTICATED:
      return {
        ...state,
        is_authenticated: action.payload,
      }
    case ACTION.COLLAPSE_MENU:
      return {
        ...state,
        collapse: action.payload,
      }
    default:
      return state
  }
}

export default BasicReducer
