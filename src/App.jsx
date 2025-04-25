import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './pages/UserList'
import UserRegistration from './pages/UserRegistration'
import UserDetail from './pages/UserDetail'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { UserProvider } from './components/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<UserList />} />
              <Route path='/user/:id' element={<UserDetail />} />
              <Route path='/user' element={<UserRegistration />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
