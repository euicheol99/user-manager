import React from 'react'
import { UserProvider } from '../components/UserContext'

const UserDetail = () => {
    const {userList,setUserList} = UserProvider
    return (
      <div>UserDetail</div>
    )
}

export default UserDetail