import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Person } from '../context/models';

const ucPerson = () => {
  const { online } = useContext(GlobalContext);
  const [psList, setPsList] = useState([]);
  const [filteredPsList, setFilteredPsList] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    if (online === 1) {
      const interval = setInterval(() => {
        runRefreshPersonAsync();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [online]);

  const runRefreshPersonAsync = async () => {
    // TODO: Replace with actual data fetching
    // setPsList(await fetchPersons());
    // setFilteredPsList(await fetchFilteredPersons());
  };

  const searchPerson = (searchText) => {
    // TODO: Implement search logic
    // setFilteredPsList(...);
  };

  return (
    <div>
      <h2>Person</h2>
      {/* Render person UI here */}
    </div>
  );
};

export default ucPerson;
