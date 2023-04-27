import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Homepage from './pages/Homepage';
import ShippingDetails from './pages/ShippingDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Booking from './pages/Booking';



function App() {


  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm) {
      const updatedRecentSearches = [
        searchTerm,
        ...recentSearches.filter((search) => search !== searchTerm).slice(0, 4)
      ];
      setRecentSearches(updatedRecentSearches);
      localStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedRecentSearches)
      );
    }
  };

  return (
    <>
      <Chat />
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage handleSearch={handleSearch} searchTerm={searchTerm} recentSearches={recentSearches} />} />
          <Route path='/shipping' element={<ShippingDetails handleSearch={handleSearch} searchTerm={searchTerm} recentSearches={recentSearches} />} />
          <Route path='/booking' element={<Booking   />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
