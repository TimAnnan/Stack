import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom' 
import Globe from '../../assests/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>Public</p></div>
          <NavLink to='/Questions'className='side-nav-links' activeClass='active' >
            <img src={Globe} alt='Globe' />
            <p style={{paddingLeft:"20px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' activeClass='active' className='side-nav-links'>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' activeClass='active' className='side-nav-links'>
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar