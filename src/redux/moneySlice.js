import { createSlice } from "@reduxjs/toolkit";
import productList from "../../src/products.json";


export const data = productList.products;


export const moneySlice = createSlice({
  name: "product",
  initialState: {
    items: data,
    amount: 100000000000,
    initialAmount: 100000000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.items.find((tmp) => tmp.id === id);
      item.count = count;
      let price = 0;

      state.items.map((tmp) => {
        return (price += Number(tmp.count) * Number(tmp.productPrice));
      });
      state.amount = Number(state.initialAmount) - Number(price);
    },
  },
});

export const { updateCount } = moneySlice.actions;
export default moneySlice.reducer;
