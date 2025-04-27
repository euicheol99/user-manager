import React, { createContext, useContext, useState } from 'react';

const UserContext = React.createContext();

const firstList = [{
    id: 1,
    name: "철수",
    age: 20,
    userState: "online",
    gender: "man"
},{
    id: 2,
    name: "영희",
    age: 21,
    userState: "offline",
    gender: "woman"
},{
    id: 3,
    name: "준수",
    age: 22,
    userState: "offline",
    gender: "man"
},{
    id: 4,
    name: "미희",
    age: 23,
    userState: "online",
    gender: "woman"
},{
    id: 5,
    name: "민수",
    age: 25,
    userState: "online",
    gender: "man"
}]

export const UserProvider = ({children}) => {
    const [userList, setUserList] = useState(firstList);

    return (
        <UserContext.Provider value={{ userList, setUserList }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);