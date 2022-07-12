import React from 'react'
import './Card.css'
import {AddCart} from '../actions'
import {connect} from 'react-redux';
// import img from '../img/default.jpg'

function Card(props) {
  console.log("Card", props);
  return (
    <div className='card-bg'>
      <img src={props.data.details.image} 
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = require('../img/default.jpg')
    }}></img>
      <p className='card-name'>{props.data.name}</p> 
      <p>Size : {props.data.details.size}</p>
      <p className='price'> $ {props.data.details.price}</p>
      <p className='tag'>{props.data.details.tag}</p>
      <button 
      onClick={() => {
        props.AddCart(props.data);
      }}>Add to Cart</button>
    </div>
  )
}

const mapStateToProps = state =>{
  console.log(state);
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      // actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
      AddCart:item=>dispatch(AddCart(item))
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)