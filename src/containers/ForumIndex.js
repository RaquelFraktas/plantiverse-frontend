import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getForumTopics } from "../redux/actionCreators"
import { ForumCard, ForumNewPost } from '../components/indexExports'
import List from '@mui/material/List';

function ForumIndex({getForumTopics, forumTopics}) {
  useEffect(getForumTopics, [getForumTopics]) 

  return <div className= "forumIndex">
    <h1>Welcome to the message boards. </h1>
    <p>Here you can chat with other fellow plant lovers, or ask for advice on issues with your plant.</p>
      <div className="forumIndexDetails">
        <div className="messageBoardCards">
          <List sx={{ width: 500, bgcolor: 'background.paper', maxHeight: 500, overflow: 'auto'}}>
            {forumTopics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
          </List>
        </div>
        <ForumNewPost />
      </div>
  </div>

}

const mapStateToProps = (state) => {
  return {forumTopics: state.forumTopics, user:state.user}
}

export default connect(mapStateToProps, {getForumTopics})(ForumIndex)

