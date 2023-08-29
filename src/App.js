import { useState, useEffect } from 'react';
import Header from './components/Header';
import StoreList from './components/StoreList';
import './index.css';
import storeitems from './data/milkItems.json';
import Search from './components/SearchBar';
import SearchList from "./components/SearchList";
import ShoppingCart from './components/ShoppingCart';
import { Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';


function App() {
  const [posts, setPosts] = useState(storeitems);
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartsVisibility, setCartVisible] = useState(true);
  const [productsInCart, setProducts] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProduct = { ...product, count: 1 };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === product.id);
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
    <Header productsInCart={productsInCart} setCartVisible={() => setCartVisible(false)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Search posts={posts} searchResults={searchResults} setSearchResults={setSearchResults} />
              {searchResults.length <= 0 ? (
                <StoreList posts={posts} page={page} setPage={setPage} searchResults={searchResults} onItemClick={handleItemClick} />
              ) : (
                <SearchList searchResults={searchResults} />
              )}
            </>
          }
        />
        
        <Route
          path="/singleproduct/:id"
          element={
            <>
              {selectedItem ? (
                <SingleProduct selectedItem={selectedItem} addProductToCart={addProductToCart} />
              ) : (
                <StoreList posts={posts} page={page} setPage={setPage} searchResults={searchResults} onItemClick={handleItemClick} />
              )}
            </>
          }
        />
         
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartsVisibility={cartsVisibility}
              productsInCart={productsInCart}
              setCartVisible={() => setCartVisible()}
              onQuantityChange={onQuantityChange}
              onProductRemove={onProductRemove}
              addProductToCart={addProductToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
