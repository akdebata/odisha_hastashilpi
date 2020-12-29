import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { signout } from "./actions/userActions";
import Products from "./components/Products";
import { Cartscreen } from "./Screens/CartScreen";
import { Homescreen } from "./Screens/HomeScreen";
import { Productscreen } from "./Screens/ProductScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import Signinscreen from "./Screens/SigninScreen";
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch= useDispatch();
  const signOutHandler =() =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              ODISHA_HASTASHILPI
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 ? (
                <span className="badge">{cartItems.length}</span>
              ) : (
                ""
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name}
                  <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <Link to="#signout" onClick={signOutHandler}>SignOut</Link>
              </ul>
              </div>
              
            ) : (
              <Link to="/signin">Sign In</Link>
              
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={Cartscreen}></Route>
          <Route path="/product/:id" component={Productscreen}></Route>
          <Route path="/signin" component={Signinscreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={Homescreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
