import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartiTems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
         [selectCartiTems],
         (cartItems) =>
           cartItems.reduce(
             (accumulatedQuantity, cartItem) =>
               accumulatedQuantity + cartItem.quantity,
             0
           )
       );