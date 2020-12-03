import React, { useEffect } from 'react'
import MessageBox from '../components/MessageBox';
import Products from "../components/Products";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';

export function Homescreen(props) {
const dispatch = useDispatch(); 
const productList = useSelector((state) => state.productList);
const{loading,error,products} = productList;
console.log(loading);
console.log(products);
console.log(error);


  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) 
      : error ? (<MessageBox variant="danger">{error}</MessageBox>)
       :(
          <div className="row center">
            {products.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        )
      }
    </div>

  );


    }