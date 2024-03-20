import { configureStore } from "@reduxjs/toolkit"
import BasicReducer from "./reducer"

const store = configureStore({
  reducer: BasicReducer,
})

export default store
