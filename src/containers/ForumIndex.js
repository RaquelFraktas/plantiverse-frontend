import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getForumTopics } from "../redux/actionCreators"
import { ForumCard, ForumNewPost } from '../components/indexExports'
import List from '@mui/material/List';

function ForumIndex({getForumTopics, forumTopics}) {
  useEffect(getForumTopics, [getForumTopics]) 


  return <div className= "forumIndex">
    <ForumNewPost />
      <br />
      <div className="messageBoardCards">
        <List sx={{ width: 400, bgcolor: 'background.paper', maxHeight: 700, overflow: 'auto'}}>
          {forumTopics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
        </List>
    </div>
  </div>

}

const mapStateToProps = (state) => {
  return {forumTopics: state.forumTopics, user:state.user}
}

export default connect(mapStateToProps, {getForumTopics})(ForumIndex)

