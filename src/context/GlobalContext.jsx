import React, { createContext, useState } from 'react';
import { encryptPassword, createOpID, logAction } from '../api/global';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentShop, setCurrentShop] = useState(null);
  const [online, setOnline] = useState(0);
  const [firstUse, setFirstUse] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [operationID, setOperationID] = useState('');
  const [opConfirm, setOpConfirm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const value = {
    activeUser, setActiveUser,
    selectedPerson, setSelectedPerson,
    selectedSupplier, setSelectedSupplier,
    selectedUser, setSelectedUser,
    currentShop, setCurrentShop,
    online, setOnline,
    firstUse, setFirstUse,
    totalPrice, setTotalPrice,
    operationID, setOperationID,
    opConfirm, setOpConfirm,
    selectedClient, setSelectedClient,
    // API integrations
    encryptPassword,
    createOpID,
    logAction
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
