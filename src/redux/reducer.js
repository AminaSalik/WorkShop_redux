import * as types from "./actionType";

const initialState = {
  cart: [{ id: 1, product: "🍒", quantity: 3 }],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case types.UPDATE_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case types.INCREMENT_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      case types.DECREMENT_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        ),
      };
      case types.RESET_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: 0 } : item
        ),
      };

    default:
      return state;
  }
};
