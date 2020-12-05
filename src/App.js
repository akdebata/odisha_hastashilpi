import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./components/Products";
import { Cartscreen } from "./Screens/CartScreen";
import { Homescreen } from "./Screens/HomeScreen";
import { Productscreen } from "./Screens/ProductScreen";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: "",
      availableCol: "",
      sort: ""
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            ODISHA_HASTASHILPI
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/cart/:id" component={Cartscreen}></Route>
        <Route path="/product/:id" component={Productscreen }></Route>
        <Route path="/" component={Homescreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
    );
  }

}

export default App;
