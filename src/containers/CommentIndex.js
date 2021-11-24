import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { CommentCard, CommentForm } from '../components/indexExports'
import { getComments, clearComments } from '../redux/actionCreators'
import List from '@mui/material/List';

function CommentIndex({comments}) {
  
  const routeIdFromMessageTopic = useParams().id
  useEffect(() => {
    getComments(routeIdFromMessageTopic)
    return clearComments()
    },[routeIdFromMessageTopic]) 

  return <div className ="commentContainer">
    <CommentForm />
    <br />
    <div className ="commentsList">
      <List sx={{ width: 400, bgcolor: 'background.paper', maxHeight: 400, overflow: 'auto'}}>
        {comments.map(comment=> <CommentCard {...comment} key={comment.id}/>)}
      </List>
    </div>
  </div>

}

const mapStateToProps = (state) => {
  return {comments: state.forumTopic.comments}
}

export default connect(mapStateToProps)(CommentIndex)