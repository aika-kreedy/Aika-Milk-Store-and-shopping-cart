import '../index.css';
import {Link } from "react-router-dom";

const  StoreList = ({posts,page,setPage,searchResults,onItemClick}) => {
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= posts.results.length / 9 && selectedPage !== page){
      setPage(selectedPage) }
    }
  const results = searchResults.map(post => <StoreList key={post.id} post={post} />)
  console.log('Search Results', searchResults);
  const content = results.length <= 0 ? results : <article><p>No Matching Products</p></article>

  return (
    <div>
        <div>
        <main>{content}</main>
          <h3 className='item-account'> {posts.count} products</h3>
          <div className='card'>
            {(posts.results).slice(page *9-9,page*9).map(item =>(
              <div className="one-card" key={item.id} >
              <img src="/imgs/milk.png" alt= {item.name} />
              <div  className="container" >
                <h3>{item.name}</h3>
                <h4 color=''>{item.type}</h4> 
                <h4 className='price' >9.99 kr</h4>
                <h5>{item.storage} Liter</h5>
                <p><Link to="/singleproduct/:{item.id}"><button className='order-btn' key={item.id} onClick={() => onItemClick(item)}>Order Milk</button></Link></p>
                </div>
                </div>)
                  )}
                </div>
                  <div className='pagination-location'>{(posts.results).length>0 && (<div className='pagination'><span>◀️</span>{
                  [...Array((posts.results).length / 9)].map((_, i) =>
                  { return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span> })}
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>▶️</span> </div>)}
                  </div>
            </div>
        

    </div>
  )
}

export default StoreList