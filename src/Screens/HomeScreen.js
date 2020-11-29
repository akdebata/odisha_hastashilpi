import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import MessageBox from '../components/MessageBox';
import Products from "../components/Products";
import LoadingBox from "../components/LoadingBox";

export function Homescreen(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await Axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) :

        (
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