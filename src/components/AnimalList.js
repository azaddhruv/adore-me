import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import Animal from './Animal'
import Form from './Form'

const AnimalList = () => {
  const { animals } = useGlobalContext()
  return (
    <main className='main-page'>
      <section className='animal-list'>
        {animals.map((animal) => {
          const { id } = animal
          return <Animal key={id} {...animal} />
        })}
      </section>
      <Form />
    </main>
  )
}

export default AnimalList
