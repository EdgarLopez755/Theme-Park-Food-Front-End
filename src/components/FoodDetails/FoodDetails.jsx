
import { AuthedUserContext } from '../../App'
import { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"

import * as foodService from '../../services/foodService'
import CommentForm from "../CommentForm/CommentForm"
import styles from './FoodDetails.module.css'



const FoodDetails = (props) => {
    const {foodId} = useParams()
    const [food, setFood] = useState(null)
    const user = useContext(AuthedUserContext)
    

    useEffect(() => {
        const fetchFood = async () => {
            const foodData = await foodService.show(foodId)
            
            setFood(foodData)
        }
        fetchFood()
    
    }, [foodId])

    const handleAddComment = async (commentFormData) => {
        const newComment = await foodService.createComment(foodId, commentFormData)
        setFood({ ...food, comments: [...food.comments, newComment]})
    }

    if (!food) return <main>Loading...</main>

    return (
        <main className={styles.container}>
            <section>
            <header>
                <p>{food.location.toUpperCase()}</p>
                <h1>{food.name}</h1>
                <div>
                    <p>
                        {food.author.username} posted on
                        {new Date(food.createdAt).toLocaleDateString()}
                    </p>
                    {food.author._id === user._id && (
                        <>
                            <Link to={`/foods/${foodId}/edit`}>Edit</Link>
                            <button onClick={() => {props.handleDeleteFood(foodId)}}>Delete</button>
                        </>
                    )}
                </div>
            </header>
            <p>{food.text}</p>
            </section>
            <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment}/>
                {!food.comments.length && <p>There are no comments.</p>}

                {food.comments.map((comment) => {
                return (
                    <article key={comment._id}>
                    <header>
                        <div>
                        <p>
                        {comment.username} posted on
                        {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                        </div>
                    </header>
                    <p>{comment.text}</p>
                    </article>
                )
                })}
            </section>
        </main>
        )        
    }



export default FoodDetails

