import React, { useState, useEffect } from 'react'
// import location from '../assets/location.svg';
// import ship from '../assets/ship.svg';
// import calendar from '../assets/calendar.svg';
import arrow from '../assets/bigarrowright.svg';
import arrowr from '../assets/arrowright.svg';
import { DatePicker, ConfigProvider } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
// import axios from 'axios';
dayjs.extend(customParseFormat);

const dateFormat = 'DD MMMM YYYY';
const customFormat = (value) => `${value.format(dateFormat)}`;



// const options = {
//   method: 'GET',
//   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '65140ea9e0msh15f4abfd1d45ee5p16a9b0jsn155ae023ad96',
//     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//   }
// };



const SearchBar = ({handleSearch, recentSearches}) => {

   const [searchTerm, setSearchTerm] = useState('');
  // const [isActive, setIsActive] = useState(true);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    // setIsActive(true)
  };

  const handleRecentSearch = (recentSearch) => {
    setSearchTerm(recentSearch);
    handleSearch(recentSearch);
    // setIsActive(true)
  };

  // const [cities, setCities] = useState()

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     setCities(response.data.data[0].city);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);


  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <form  onSubmit={handleSubmit} className='search-form'>
          <span className='mx-2 search-span'>
            <input className='mx-1 my-1 search-input dropdown-toggle dropdown-toggle-split' value={searchTerm} onChange={handleInputChange}  data-bs-toggle="dropdown" type='text' placeholder='Origin, Port, City' />
            {searchTerm.length === 0 && recentSearches.map((recentSearches)=> (
              <ul className='dropdown-menu city-dropdown'>
              <p className='recent mx-3'>Recent Searches</p>
              <p className='recent1 mx-3' >{recentSearches} <img alt='' src={arrowr} /> Delhi <p className='recent2'>12 April 2023   100kg</p></p>
            </ul>
            )) }
          </span>
          <span className='mx-2 search-span'>
            <input className='mx-1 my-1 search-input' type='text' placeholder='Origin, Port, City' />
          </span>
          <div className='vl'></div>
          <span className='mx-2  search-span'>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#6F57E9',
                  borderRadius: 14,
                  colorBorder: '2px solid #6F57E9',
                  colorText: 'gray',
                  fontFamily: 'Figtree',
                  fontSize: '16px',
                },
              }}
            >
              <DatePicker style={{ color: 'gray', width: '250px' }} className='mx-1 my-1 search-input date-input' type='date' defaultValue={dayjs('15 March 2023', dateFormat)} format={customFormat} />
            </ConfigProvider>
          </span>
          <div className='vl'></div>
          <span className='mx-2 search-span input-group'>
            <input className='mx-1 my-1 search-input ship-input'  type='text' placeholder='Load' />
            {/* <div class="dropdown-menu load-drop-menu">
              <form>
                <div className='status'>
                  <div className="form-check mx-3">
                    <input className="form-check-input load-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label load-drop-label-radio" for="flexRadioDefault1">
                      Calculate by unit type
                    </label>
                  </div>
                  <div className="form-check mx-3">
                    <input className="form-check-input load-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label load-drop-label-radio" for="flexRadioDefault2">
                      Calculate by Total shipment
                    </label>
                  </div>

                </div>
                <div className='status   my-2 mx-3'>

                  <div className="form-check mx-3">
                    <input className="form-check-input load-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label load-drop-label-radio" >
                      Calculate
                    </label>
                  </div>
                  <div className="form-check mx-3">
                    <input className="load-input1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="load-input1  load-drop-label-radio" for="flexRadioDefault2">
                      shipment
                    </label>
                  </div>

                </div>
              </form>
            </div> */}
          </span>
          <div className='vl'></div>
         <Link to={'/shipping'} >  <button  className='arrow-btn mx-2'> <img alt='' src={arrow} /> </button> </Link>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
