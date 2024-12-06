import { useParams } from "react-router-dom"


const FoodDetails = (props) => {
    const { foodId } = useParams()
    console.log('foodId', foodId)
    return <main>Food Details</main>
}

export default FoodDetails