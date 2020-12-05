import React from 'react'

export function Cartscreen(props) {
    const productId=props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1]):1;

    return (
        <>
        <div>Cart screen</div>
            <p>Add to cart productID :{productId} ty:{qty} </p  >
        </>
    )
}
