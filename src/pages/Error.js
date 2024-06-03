import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>
          No Drinks Here! <br/>Let’s Head Back to the Bar...
        </h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  )
}
