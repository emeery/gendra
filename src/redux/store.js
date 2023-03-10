import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./reducers/Item-reducer";
const store = configureStore({
    reducer: {items: ItemReducer}
})
export default store;