import React, { createContext, useContext, useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [userList, setUserList] = useState([]);

    return (
        <UserContext.Provider value={{ userList, setUserList }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);