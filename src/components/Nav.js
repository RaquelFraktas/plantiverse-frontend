import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/plants'>See All Plants</NavLink>
    <NavLink to='/message_boards'>Message Boards</NavLink>
  </nav>
}