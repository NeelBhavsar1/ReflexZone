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
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to= '/games'>Games</NavLink></li>
                {/*<NavLink to='/statistics'><li>Statistics</li></NavLink>*/}
                {/*<NavLink to='/settings'><li>Settings</li></NavLink>*/}
            </ul>
            {/*<Link to='/signin' className='navbar-btn'>Sign in</Link> */}

        </div>
    )
}

export default NavBar