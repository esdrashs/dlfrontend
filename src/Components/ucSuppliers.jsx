import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Person, Supplier, Replenish } from '../context/models';

const ucSuppliers = () => {
  const { online } = useContext(GlobalContext);
  const [psList, setPsList] = useState([]);
  const [filteredPsList, setFilteredPsList] = useState([]);
  const [cList, setCList] = useState([]);
  const [filteredCList, setFilteredCList] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [opList, setOpList] = useState([]);
  const [filteredOpList, setFilteredOpList] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Timer logic
  useEffect(() => {
    if (online === 1) {
      const interval = setInterval(() => {
        runRefreshSupplierAsync();
        runRefreshSupplierOpsAsync();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [online]);

  // Async refresh methods (stubbed)
  const runRefreshSupplierAsync = async () => {
    // TODO: Replace with actual data fetching
    // setCList(await fetchSuppliers());
    if (isFirstTime) {
      filterSuppliers();
      setIsFirstTime(false);
    }
  };

  const runRefreshSupplierOpsAsync = async () => {
    // TODO: Replace with actual data fetching
    // setOpList(await fetchSupplierOps(selectedClient));
  };

  const filterSuppliers = () => {
    // TODO: Implement filtering logic
    // setFilteredCList(...);
  };

  return (
    <div>
      <h2>Suppliers</h2>
      {/* Render suppliers UI here */}
    </div>
  );
};

export default ucSuppliers;
