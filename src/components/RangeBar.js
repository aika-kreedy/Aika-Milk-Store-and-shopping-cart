import React from 'react'

const RangeBar = ({OrderValue,setOrderValue}) => {
   
    console.log(typeof Number(OrderValue))
  return (
    <div> <input className={OrderValue>50?'heigh':'less'} type="range" min="0" max="100" step="1" value={OrderValue} onChange={(e)=>setOrderValue(e.target.value)} Liter />
    <h1>{Number(OrderValue)}</h1>
    <h4 className='liter-txt'>
   {(Number(OrderValue)<=1 )? <h2>Liter</h2>:<h2>Liters</h2>}
    </h4>
    </div>
  )
}

export default RangeBar;