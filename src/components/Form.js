import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
  const { addAnimal } = useGlobalContext()

  const [animal, setAnimal] = useState({
    name: '',
    age: '',
    type: '',
    desc: '',
    image: '',
  })

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setAnimal((animal) => {
      return { ...animal, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAnimal = { ...animal, id: uuidv4() }
    addAnimal(newAnimal)
    setAnimal({
      name: '',
      age: '',
      type: '',
      desc: '',
      image: '',
    })
  }

  return (
    <div className='animal-form-conatiner'>
      <form className='animal-form' onSubmit={handleSubmit}>
        <div className='form-header'>
          <h2>OneMoreMe</h2>
        </div>
        <input
          type='text'
          onChange={onChange}
          name='name'
          id='name'
          value={animal.name}
          placeholder='Name'
          required
        />
        <input
          type='number'
          name='age'
          id='age'
          value={animal.age}
          onChange={onChange}
          placeholder='Age'
          required
        />
        <input
          type='text'
          onChange={onChange}
          name='type'
          id='type'
          value={animal.type}
          placeholder='Type'
          required
        />

        <input
          type='text'
          onChange={onChange}
          name='image'
          id='image'
          value={animal.image}
          placeholder='Image'
          required
        />
        <textarea
          type='text'
          onChange={onChange}
          name='desc'
          id='desc'
          value={animal.desc}
          placeholder='Description'
          rows='3'
          required
        />
        <button type='submit' className='form-btn'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
