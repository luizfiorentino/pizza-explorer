import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzaReducer from "./pizzas/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    user: userReducer,
  },
});

export default store;
