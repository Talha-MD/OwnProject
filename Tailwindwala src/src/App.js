import React from "react";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/cartScreen";
import userLogin from "./Screen/userLogin";
import RegisterScreen from "./Screen/userRegisterScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import shippingScreen from "./Screen/shippingScreen";
import PaymentScreen from "./Screen/paymentScreen";
import PlaceOrderScreen from "./Screen/PlaceOrderScreen";
import OrderScreen from "./Screen/OrderScreen";
import UserListScreen from "./Screen/UserlistScreen";
import UserEditScreen from "./Screen/UserEditScreen";
import ProductListScreen from "./Screen/ProductListScreen";
import ProductEditScreen from "./Screen/ProductEditScreen";
import OrderListScreen from "./Screen/OrderlistScreen";


function App() {
  return (
    <div>
      <Router>
        <Headers />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/login" component={userLogin} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/shipping" component={shippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/admin/orderlist" component={OrderListScreen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
