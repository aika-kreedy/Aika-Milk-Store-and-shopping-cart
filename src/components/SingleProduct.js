import{ React,useState} from 'react'
import RangeBar from './RangeBar';
import { Link } from 'react-router-dom';
import '../index.css';

const SingleProduct = ({ selectedItem,addProductToCart}) => {
  const [OrderValue,setOrderValue] = useState(0)
  if (!selectedItem) return <div></div>;
  return (
    <div>
        
    <article className='single-product'>
      <div className='img-container'>
        <img  className='image-singleProduct' src="/imgs/milk.png" alt={selectedItem.name} />
      </div>
      
        <h3 className='title-singleProduct'>{selectedItem.name}</h3>
        <div className='info-singleProduct'>
        <h4>{selectedItem.type}</h4>
        <p>{(selectedItem.storage)- (OrderValue)}</p>
       
        <RangeBar  OrderValue={OrderValue} setOrderValue={setOrderValue} /> 
       
        <p><Link to="/cart/"><button className='order-btn' key={selectedItem.id} onClick={() => addProductToCart()}>Add To Cart</button></Link></p>
 </div>
    </article>
    
    </div>
  )
}

export default SingleProduct;

