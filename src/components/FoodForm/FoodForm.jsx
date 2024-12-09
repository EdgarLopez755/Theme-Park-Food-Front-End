import { useState, useEffect } from 'react'
import * as foodService from '../../services/foodService'
import { useParams } from 'react-router-dom'
import styles from './FoodForm.module.css'


const FoodForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        location: 'Main Street',
    })

    const { foodId } = useParams()

    useEffect(()=> {
        const fetchFood = async () => {
            const foodData = await foodService.show(foodId)
            setFormData(foodData)
        }
        if(foodId) fetchFood()
      }, [foodId])

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (foodId) {
            props.handleUpdateFood(foodId, formData)
        } else {
        props.handleAddFood(formData)
        }
    }

    


    return (
        <main className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>{foodId ? 'Edit Food' : 'New Food'}</h1>
                <label htmlFor='name-imput'>Name</label>
                <input
                    required
                    type='text'
                    name='name'
                    id='name-input'
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor='text-input'>Text</label>
                <textarea
                    required
                    type='text'
                    name='text'
                    id='text-input'
                    value={formData.text}
                    onChange={handleChange}
                />
                <label htmlFor='location-input'>Location</label>
                <select
                    required
                    name='location'
                    id='location-input'
                    value={formData.location}
                    onChange={handleChange}
                >
                    <option value="Main Street">Main Street</option>
                    <option value="Tomorrowland">Tomorrowland</option>
                    <option value="Adventureland">Adventureland</option>
                    <option value="Fantasyland">Fantasyland</option>
                    <option value="Frontierland">Frontierland</option>
                    <option value="StarWars land">StarWars land</option>
                    <option value="New Orleans Square">New Orleans Square</option>
                    <option value="Toon Town">Toon Town</option>
                    
                </select>
                <button type='submit'>Submit</button>



            </form>
        </main>
    )
}

export default FoodForm