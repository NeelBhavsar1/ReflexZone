import ReflexZone from '../assets/icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

//navigation bar 

function NavBar() {
    return (
        <div className='navbar-container'>
            <img src={ReflexZone} alt="ReflexZone icon" width="250px"/>
            <ul>
                <NavLink to ='/'><li>Home</li></NavLink>
                <NavLink to= '/games'><li>Games</li></NavLink>
                <NavLink to='/statistics'><li>Statistics</li></NavLink>
                <NavLink to='/settings'><li>Settings</li></NavLink>
            </ul>
            <Link to='/signin' className='navbar-btn'>Sign in</Link>

        </div>
    )
}

export default NavBar