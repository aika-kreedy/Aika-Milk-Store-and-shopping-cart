import React from 'react'
import {Link } from "react-router-dom";

const SearchList = ({searchResults}) => {
  return (
    <>
 <div className='card'>
            {searchResults.map(item =>(
              <div className="one-card" key={item.id} >
              <img src="/imgs/milk.png" alt= {item.name} />
              <div  className="container" >
                <h3>{item.name}</h3>
                <h4 color=''>{item.type}</h4> 
                <h5>{item.storage} Liter</h5>
                <p><Link to="/singleproduct"><button>Order Milk</button></Link></p>
                </div>
                </div>)
                  )}
                  </div>
    </>
  )
}

export default SearchList