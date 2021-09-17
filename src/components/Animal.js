import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Animal = ({ name, type, image, desc, age, likes }) => {
  const [click, setClick] = useState(false)
  console.log(`click ${click}`)
  return (
    <section className='card'>
      <i
        onClick={() => setClick(!click)}
        className={click ? 'fas fa-hamburger icon-click' : 'fas fa-hamburger'}
      ></i>
      <div className='card-img-container'>
        <img
          src={`${image}`}
          alt={type}
          className={click ? 'card-img card-img-after' : 'card-img'}
        />
      </div>
      <div className={click ? 'card-content show-content' : 'card-content'}>
        <div className='content-wrap'>
          <h4>
            <i className='fas fa-paw'></i> {type}
          </h4>
          <p>{desc}</p>
        </div>
      </div>
      <div className={click ? 'card-header card-header-top' : 'card-header'}>
        <h3 className='card-heading'>
          {name} {age}
        </h3>
      </div>

      <div className={click ? 'card-footer show' : 'card-footer'}>
        <ul className='footer-items'>
          <li className='footer-item'>
            <Link className='footer-link' to='#'>
              <i className='fab fa-facebook-f'></i>
            </Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-link' to='#'>
              <i className='fab fa-twitter'></i>
            </Link>
          </li>
          <li className='footer-item'>
            <Link className='footer-link' to='#'>
              <i className='fab fa-linkedin-in'></i>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Animal
