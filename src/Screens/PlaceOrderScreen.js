import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkoutsteps from "../components/CheckoutSteps";

export function Placeorderscreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 1000 ? 100 : 70;
  cart.taxPrice = toPrice(0 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler=() =>{

  }

  return (
    <>
      <Checkoutsteps step1 step2 step3 step4></Checkoutsteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h1>Shipping </h1>
                <p>
                  <strong>Name:</strong>
                  {cart.shippingAddress.fullName} <br />
                  <strong>Address:</strong>
                  {cart.shippingAddress.address} ,{cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.state},{cart.shippingAddress.state},
                  {cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h1>Payment Method</h1>
                <p>
                  <strong>Method:</strong>
                  {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h1>Order Items </h1>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>{item.qty}*{item.price} = Rs {item.price * item.qty}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <h2>Order Summury</h2>
                    </li>
                    <li>
                        <div className="row">
                            <div>Items</div>
                            <div>Rs {cart.itemsPrice.toFixed(2)}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Shipping</div>
                            <div>Rs {cart.shippingPrice.toFixed(2)}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Tax</div>
                            <div>Rs {cart.taxPrice.toFixed()}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div><strong>Order Total</strong></div>
                            <div>Rs {cart.totalPrice.toFixed(2)}</div>
                        </div>
                    </li>
                    <li>
                        <button className="primary block"
                         onClick={placeOrderHandler}
                         disabled={cart.cartItems.length==0}
                         >Place Order</button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
