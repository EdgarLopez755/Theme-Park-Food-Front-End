import { useState, createContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from './services/authService'
import * as foodService from './services/foodService'


import FoodList from './components/FoodList/FoodList'
import FoodDetails from './components/FoodDetails/FoodDeatails'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [foods, setFoods] = useState([])


  useEffect(() => {
    const fetchAllFoods = async () => {
      const foodsData = await foodService.index()
      
      setFoods(foodsData)
    }
    if (user) fetchAllFoods()
  }, [user])


  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  return (
    <>
      <NavBar user={user}  handleSignout={handleSignout} /> 
      <Routes>
        { user ? (
          <> 
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/foods" element={<FoodList foods={foods} />} />
          <Route path="/foods/:foodId" element={<FoodDetails />} />
          </>
        ) : (
          <Route path='/' element={<Landing />} />
          
        )}
        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
