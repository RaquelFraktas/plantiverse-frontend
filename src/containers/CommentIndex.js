import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { CommentCard, CommentForm } from '../components/indexExports'
import { getComments, clearComments } from '../redux/actionCreators'

function CommentIndex({comments}) {
  
  const routeIdFromMessageTopic = useParams().id
  useEffect(() => {
    getComments(routeIdFromMessageTopic)
    return clearComments()
    },[routeIdFromMessageTopic]) 

    return <div className ="commentContainer">
      this is in comment index
      <CommentForm />
      {comments.map(comment=> <CommentCard {...comment} key={comment.id}/>)}
    </div>

}

const mapStateToProps = (state) => {
  return {comments: state.forumTopic.comments}
}

export default connect(mapStateToProps)(CommentIndex)