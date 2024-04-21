import React, { useState, createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateData = (newData) => {
        setData(newData);
    };

    const updateLoggedIn = (loggedIn) => {
        setIsLoggedIn(loggedIn);
    }

    return (
        <DataContext.Provider value={{ data, updateData, isLoggedIn, updateLoggedIn }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
