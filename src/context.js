import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return <AppContext.Provider value={{ isModalOpen, isSidebarOpen, setIsModalOpen, setIsSidebarOpen }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
