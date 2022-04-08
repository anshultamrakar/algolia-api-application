import React from 'react'
import { poster }from './poster'
import { Link } from 'react-router-dom'

const RandomData = () => {

  return (
    <div>
     <p>{JSON.stringify(poster)}</p>
     <br/>
     <br/>
     
     <Link to = "/">
     <button> Back to main page </button>
     </Link>
   
    </div>
  )
}

export default RandomData