import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducer/cartReducer";
import {
  ProductListReducer,
  ProductDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
} from "./Reducer/productReducer";
import {
  userLoginReducer,
  userReducerRegister,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./Reducer/userReducer";
import {
  orderCreateReducer,
  OrderDetailReducer,
  orderPayReducer,
  MyOrderListReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./Reducer/OrderReducer";

const reducer = combineReducers({
  productList: ProductListReducer,
  ProductDetails: ProductDetailReducer,
  ProductDelete: productDeleteReducer,
  ProductCreate: productCreateReducer,
  ProductUpdate: productUpdateReducer,
  ProductReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userReducerRegister,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: OrderDetailReducer,
  orderPay: orderPayReducer,
  MyOrderList: MyOrderListReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
