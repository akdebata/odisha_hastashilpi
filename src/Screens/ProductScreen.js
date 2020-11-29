import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
//import data from "../data"

export function Productscreen(props) {
    const product = props.product.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div>Product not found </div>
    }
    return (
    <div>
        <Link to="/">back to result</Link>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} noOfReviews={product.numReviews}></Rating>
                    </li>
                    <li>
                        Price :  Rs{product.price}
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price </div>
                                <div className="price"> Rs {product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status </div>
                                <div> {product.countInStock > 0 ? (<span className="success">In stocks</span>) : (<span className="danger">Unavialable</span>)}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}
