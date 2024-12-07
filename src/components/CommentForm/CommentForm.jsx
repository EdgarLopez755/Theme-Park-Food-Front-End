import { useState, useEffect } from 'react'

import * as foodService from '../../services/foodService'

const CommentForm = (props) => {
    const [formData, setFormData] = useState({ text: '' })
    
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handeAddComment(formData)
        setFormData({ text: '' })
      };

      return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text-input'>Comment:</label>
            <textarea 
                required
                type='text'
                name='text'
                id='text-input'
                value={formData.text}
                onChnage={handleChange}
                            
            />
            <button type='submit'>Submit Comment</button>

        </form>
      )

}

export default CommentForm