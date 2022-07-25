import React from 'react'
import { useSelector } from 'react-redux'
const FormOverview = () => {

    const state = useSelector(state => state.form)
    console.log(state)

  return (
    <div>
        <p className='w-20'>{JSON.stringify(state)}</p>
    </div>
  )
}

export default FormOverview