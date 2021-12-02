import { useEffect } from "react"
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearUserShow, getUser } from '../redux/actionCreators'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function UserShow({selectedUser, getUser, clearUserShow}){
  const routeId = useParams().id
  const spinner = () => <div className="loader"></div>

  useEffect(() => {
    getUser(routeId)
    return clearUserShow()
  }, [getUser, routeId, clearUserShow])

  const plantCollection= () =><div className="userPlantCollection">
    <h2>This is in {selectedUser.username}'s' plant collection</h2>
      <Box sx={{ width: 400, height: 400, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {selectedUser.plants.map(plant => 
            <ImageListItem key={plant.id}
              component={Link}
              to={`/plants/${plant.id}`}>
              <img
                src={`${plant.imgUrl}?w=248&fit=crop&auto=format`}
                srcSet={`${plant.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={plant.title}
                loading="lazy"
              />
            </ImageListItem>
          )}
        </ImageList>
      </Box>
    </div>

  const userMessageboardPosts= ()=> <div className="selectedUserPosts">
    {selectedUser.forumTopics !== "" && <h3>These are the forums they posted in</h3>}
    <ul>
      {selectedUser.forumTopics.map(forumTopic => <li key={forumTopic.id}><Link to={`/message_boards/${forumTopic.id}`} >{forumTopic.title}</Link></li>)}
    </ul>
  </div>


  const loadedPage= () => <div className="userShow">
    <h1> Hello! </h1>
    {plantCollection()}
    {userMessageboardPosts()}
  </div>

  return selectedUser.id ? loadedPage() : spinner()  
}

const mapStateToProps = (state) =>({
  selectedUser: state.selectedUser
})

export default connect (mapStateToProps, { clearUserShow, getUser })(UserShow)
