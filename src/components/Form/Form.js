import './Form.css'
import { useState } from 'react'



const Form = ({  setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')


    const handleContactForm = (e) => {

        e.preventDefault()
        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    
    }
    return (

        <div className='ContactContainer'>
          <div>Contact</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Name:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label className='LabelContact'>Phone:
              <input
                className='InputContact'
                type='number'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Address:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comment:
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <button className='btn-brand' type='submit'>Confirm</button>
          </form>
        </div>
      )

}

export default Form