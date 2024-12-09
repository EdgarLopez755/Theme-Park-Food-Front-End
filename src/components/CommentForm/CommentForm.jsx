import { useState, useEffect } from 'react'

import * as foodService from '../../services/foodService'

import styles from './CommentForm.module.css'

const CommentForm = (props) => {
    const [formData, setFormData] = useState({ text: '' })
    
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleAddComment(formData)
        setFormData({ text: '' })
      };

    //   if (foodId && commentId) return (
    //     <main className={styles.container}>
    //         <form onSubmit={handleSubmit}>
    //             <label htmlFor='text-input'>Comment:</label>
    //             <textarea
    //                 required
    //                 type='text'
    //                 name='text'
    //                 id='text-input'
    //                 value={formData.text}
    //                 onChange={handleChange}
    //             />
    //             <button type='submit'>Submit</button>

    //         </form>

    //     </main>
    //   )

      return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text-input'>Comment:</label>
            <textarea 
                required
                type='text'
                name='text'
                id='text-input'
                value={formData.text}
                onChange={handleChange}
                            
            />
            <button type='submit'>Submit</button>

        </form>
      )

}

export default CommentForm