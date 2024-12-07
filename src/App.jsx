import { useState, createContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from './services/authService'
import * as foodService from './services/foodService'


import FoodList from './components/FoodList/FoodList'
import FoodDetails from './components/FoodDetails/FoodDetails'
import FoodForm from './components/FoodForm/FoodForm'




const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [foods, setFoods] = useState([])

  const navigate = useNavigate()


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

  const handleAddFood = async (foodFormData) => {
    const newFood = await foodService.create(foodFormData)
    setFoods([newFood, ...foodsData])
    navigate('/foods')
  }

  const handleDeleteFood = async (foodId) => {
    const deletedFood = await foodService.deleteFood(foodId)
    setFoods(foods.filter((food) => food._id !== deletedFood._id))
    navigate('/foods')
  }


  return (
    <>
      <NavBar user={user}  handleSignout={handleSignout} /> 
      <Routes>
        { user ? (
          <> 
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/foods" element={<FoodList foods={foods} />} />
          <Route path="/foods/:foodId" element={<FoodDetails handleDeleteFood={handleDeleteFood} />} />
          <Route path="/foods/new" element={<FoodForm handleAddFood={handleAddFood} />} />
          
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
