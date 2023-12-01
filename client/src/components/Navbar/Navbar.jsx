import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import logo from '../../assests/logo.png'
import { FaSistrix } from "react-icons/fa6";
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser';
import {jwtDecode} from "jwt-decode";

const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate  = useNavigate()

    const handleLogOut = () => {
      dispatch( { type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
    }
    

    useEffect(() => {
      const token = User?.token
      if(token) {
        const decodedToken = jwtDecode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()) {
          handleLogOut()
        }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))

    }, [dispatch])

   
  return (
    <nav className='main-nav'>
       <div className="bar2">
       <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn' >About</Link>
        <Link to='/' className='nav-item nav-btn' >Products</Link>
        <Link to='/' className='nav-item nav-btn' >For Teams</Link>
        <form>
            <FaSistrix className="search-icon"size="20px" /><input type='text' placeholder='Enter the query...!' className='Input' />
        </form>
            { User === null ? 
            <Link to='/Auth' classname='nav-item navlinks'>Log-In</Link> :
            <>
                <Link to={`/Users/${User?.result?._id}`} style={{textDecoration:'none'}}><Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white" textDecoration="none" fontSize="14px">{User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
                <button className='nav-item navlinks' onClick={ handleLogOut }>Log-Out</button>
            </>
            }
    </div>
    </nav>
  )
}

export default Navbar