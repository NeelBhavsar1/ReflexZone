import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className='NotFound'>
        <h1>404</h1>
        <p className='nf1'>Oops, This Page Was Not Found!</p>
        <p className='nf2'>This link might be corrupted,</p>
        <p className='nf3'>or the page may have been removed</p>

        <button onClick={() => navigate('/')}>Go back Home</button>
    </div>
  )
}

export default NotFound