import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, CssBaseline, Typography} from "@material-ui/core";

export default function Navbar(){

  return <nav>
    <AppBar position="sticky" style={{backgroundColor: "rgba(54,148,25,0.67)"}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h3" className="plantiverse-nav">
          PlantiVerse
        </Typography>
        <Typography variant="h6" >
          <NavLink to="/" className="navbarLink">
            Home
          </NavLink>
          <NavLink to="/plants" className="navbarLink">
            See All Plants
          </NavLink>
          <NavLink to="/message_boards" className="navbarLink">
            Message Boards
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  </nav>
  
}