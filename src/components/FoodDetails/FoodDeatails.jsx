import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import * as foodService from '../../services/foodService'



const FoodDetails = (props) => {
    const { foodId } = useParams()
    const [food, setFood] = useState(null)
    console.log('foodId', foodId)
    return <main>Food Details</main>
}

useEffect(() => {
    const fetchFood = async () => {
        const foodData = await foodService.show(foodId)
        console.log('foodData', foodData)
        setFood(foodData)
    }
    fetchFood()

}, [foodId])

export default FoodDetails