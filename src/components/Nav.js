import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, CssBaseline, Typography} from "@material-ui/core";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


export default function Navbar(){


let theme = createTheme();
theme = responsiveFontSizes(theme);

  return <nav>
    <AppBar position="sticky" style={{backgroundColor: "rgba(54,148,25,0.67)"}}>
      <CssBaseline />
      <Toolbar>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  </nav>
  
}