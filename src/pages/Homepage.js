import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Services from '../components/Services';
import Navbar from '../components/Navbar';

const Homepage = ({handleSearch, recentSearches}) => {
  return (
    <div className="App homepage-login">
          <Navbar />
          <Header />
          <SearchBar handleSearch={handleSearch}  recentSearches={recentSearches}  />
          <Services />
          <svg className='vecter-2' width="auto" height="152" viewBox="0 0 1440 152" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M497.293 72.5169C410.519 74.4837 366.453 2.62716 281.384 19.8398C216.523 32.9637 201.201 100.702 135.192 105.44C74.655 109.786 -11 52.763 -11 52.763V890H1622V52.763C1622 52.763 1559.15 35.8084 1517.84 33.0091C1432.56 27.2309 1387.78 79.3728 1302.59 72.5169C1218.05 65.7139 1182.65 -2.75361 1097.88 0.0858828C1028.18 2.42093 998.653 50.7671 929.442 59.3476C836.824 70.8301 786.883 13.7396 693.755 19.8398C614.485 25.0321 576.712 70.7168 497.293 72.5169Z" fill="#7357FF" />
      </svg>
      <svg className='vecter-1' width="auto" height="139" viewBox="0 0 1440 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M327.293 72.5169C240.519 74.4837 196.453 2.62716 111.384 19.8398C46.5227 32.9637 31.2009 100.702 -34.8079 105.44C-95.345 109.786 -181 52.763 -181 52.763V890H1452V52.763C1452 52.763 1389.15 35.8084 1347.84 33.0091C1262.56 27.2309 1217.78 79.3728 1132.59 72.5169C1048.05 65.7139 1012.65 -2.75361 927.884 0.0858828C858.181 2.42093 828.653 50.7671 759.442 59.3476C666.824 70.8301 616.883 13.7396 523.755 19.8398C444.485 25.0321 406.712 70.7168 327.293 72.5169Z" fill="#8C76FF" />
      </svg>
      </div>
  )
}

export default Homepage
