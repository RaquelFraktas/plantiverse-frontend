import './App.css';
import { PlantIndex, PlantShow, Navbar, Auth, HomePage, UserShow, ForumIndex, ForumShow , Banner, NotFound} from './components/indexExports'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin, logOut } from './redux/actionCreators'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App({username, autoLogin, logOut}) {
  const history = useHistory()

  useEffect(() => localStorage.token && autoLogin(),[autoLogin])
  
  const handleLogout = (e) => {
    e.preventDefault();
    logOut()
    history.push("/")
  }

  return (
    <>
    <Navbar/>
    <Banner />
    <div className="container">
   
    { username ? 
      <Switch>
        <Route path="/plants/:id" component={PlantShow} />
        <Route path="/plants?page=:id" component={PlantIndex} />
        <Route path="/plants" component= {PlantIndex} />
        <Route path="/message_boards/:id" component={ForumShow} />
        <Route path="/message_boards/" component={ForumIndex}/>
        <Route path="/users/:id" component={UserShow} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch> :
      <Auth />
    }

    </div>
    {username && <footer>
      <Link to='/' className="logout" onClick={handleLogout}> Log Out </Link>
      <br/>
      <Link to='https://www.123rf.com/photo_106978867_background-with-watercolor-tropical-plants-and-flowers-useful-for-design-of-banners-cards-greetings-.html' >Source Link for Banner</Link>
    </footer> 
    }
    </>
  );
}

const mapStateToProps = (state)=> {
  return {username: state.user.username}

}

export default connect(mapStateToProps, { autoLogin, logOut })(App);
