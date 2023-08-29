import React from 'react';
import { FaSearch } from 'react-icons/fa';


const Search = ({ posts, searchResults, setSearchResults }) => {

    const handleSearchChange = (e) => {
        if (!e.target.value) {return setSearchResults(posts.results)}
        else{
     const resultsArray = (posts.results).filter((post) => (post.name.toLowerCase()).includes(e.target.value))
        console.log(resultsArray)
        setSearchResults(resultsArray)
        console.log('hahahahha',searchResults)
       }
    }

    const handleSubmit = (e) => e.preventDefault()

    return (
        <>
        <header> 
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder='Search Milk Product...'
                    onChange={handleSearchChange}
                />
                <button type='submit' className="search__button">
                  <FaSearch  size={19} className='search-icon' />
                </button>
               
            </form>
        </header>
      
        </>
    )
}

export default Search;   