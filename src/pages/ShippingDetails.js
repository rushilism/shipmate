import React from 'react'
import SearchBar from '../components/SearchBar'
import Update from '../components/Update'
import Result from '../components/Result'
import Navbar from '../components/Navbar'

const ShippingDetails = ({handleSearch, recentSearches, searchTerm}) => {
  return (
    <div>
       <div className='App shipping-details'>
            <Navbar />
            <Update />
            <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} recentSearches={recentSearches} />
            <Result/>
        </div>
    </div>
  )
}

export default ShippingDetails

