import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import Checkoutsteps from '../components/CheckoutSteps'

export function Shippingaddressscreen(props) {
    const userSignin= useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector(state => state.cart);
    const{shippingAddress} = cart;
    if(!userInfo){
        props.history.push('/signin');
    }
    const[fullName ,setFullName]= useState(shippingAddress.fullName);
    const[address ,setAddress]= useState(shippingAddress.address);
    const[city ,setCity]= useState(shippingAddress.city);
    const[state ,setState]= useState(shippingAddress.state);
    const[postalCode ,setPostalCode]= useState(shippingAddress.postalCode);
    const[country ,setCountry]= useState(shippingAddress.country);
    const  dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName,address,city,state,country,postalCode}));
        props.history.push("/payment");

    }
    

    return (
        <>
            <Checkoutsteps step1 step2></Checkoutsteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" value={fullName}
                    placeholder="Enter full name"
                    onChange={(e)=>setFullName(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" value={address}
                    placeholder="Enter Address"
                    onChange={(e)=>setAddress(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" value={city}
                    placeholder="Enter  city"
                    onChange={(e)=>setCity(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input type="text" value={state}
                    placeholder="Enter state"
                    onChange={(e)=>setState(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" value={country}
                    placeholder="Enter Country"
                    onChange={(e)=>setCountry(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" value={postalCode}
                    placeholder="Enter Postal Code"
                    onChange={(e)=>setPostalCode(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label></label>
                    <button type="submit" className="primary">Continue</button>
                </div>
            </form>
        </>
    )
}
