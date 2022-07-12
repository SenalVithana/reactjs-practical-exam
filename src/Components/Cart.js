import React from 'react'
import './Cart.css'
import { UpdateCart } from '../actions';

function Cart(props) {
  return (
    <div className='cart-card'>
        <img src={props.data.productdata.details.image} 
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = require('../img/default.jpg')
    }}></img>
        <p className='cart-name'>{props.data.name}</p>
        <p className='cart-price'>$ {props.data.productdata.details.price}</p>
    </div>
  )
}

export default Cart