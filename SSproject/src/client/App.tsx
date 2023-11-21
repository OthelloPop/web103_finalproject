import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { UserProvider } from './contexts/UserContext'
import LandingPage from './components/LandingPage'
import UserLogin from './components/UserLogin'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Profile from './components/Profile'
import Discover from './components/Discover'
import MyCollections from './components/MyCollections'
import NewCollection from './components/NewCollection'
import ViewMovie from './components/ViewMovie'

function App() {

  return (
    <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/my-collections" element={<MyCollections />} />
            <Route path="/new-collection" element={<NewCollection />} />
            <Route path="/viewMovie/:id" element={<ViewMovie />} />
            
          </Routes>
        </UserProvider>
    </Router>
  );
}

export default App
