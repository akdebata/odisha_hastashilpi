import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/LoadingBox';
import {detailsProduct} from '../actions/productActions'


export  function Productscreen(props) {
    const dispatch = useDispatch();
    const productId=props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch , productId ])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
                : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
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
        </div>



    )
}
