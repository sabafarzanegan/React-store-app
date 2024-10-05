import { cartItem, cartState } from "@/lib/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: cartState = {
  cartItem: [],
  cartTotal: 0,
  orderTotal: 0,
  tax: 0,
  shipping: 500,
  numItemsIncart: 0,
};

const defaultValueFromStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : initialState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: defaultValueFromStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existedItem = state.cartItem.find(
        (i: cartItem) => i.cartId === newItem.cartId
      );

      if (existedItem) {
        existedItem.amount += newItem.amount;
      } else {
        state.cartItem.push(newItem);
      }
      state.numItemsIncart += newItem.amount;
      state.cartTotal += Number(newItem.amount) * newItem.price;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(initialState));
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
