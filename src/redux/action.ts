import { ACTION } from "./actionTypes"

const setCollape = (collapse: boolean) => {
  return {
    type: ACTION.COLLAPSE_MENU,
    payload: collapse,
  }
}

const setAuthentication = (is_authenticated: boolean) => {
  return {
    type: ACTION.IS_AUTHENTICATED,
    payload: is_authenticated,
  }
}

export { setCollape, setAuthentication }
