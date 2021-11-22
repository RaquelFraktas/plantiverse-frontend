import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { CommentShow, CommentForm } from '../components/indexExports'
import { getComments, clearComments } from '../redux/actionCreators'

function CommentIndex({comments, user}) {
  
  const routeId = useParams().id
  useEffect(() => {
    getComments(routeId)
    return clearComments()
    },[routeId]) 

  console.log("from index", comments)

    return <div className ="commentContainer">
      this is in comment index
      <CommentForm />
      {comments.map(comment=> <CommentShow {...comment} key={comment.id}/>)}
    </div>

}

const mapStateToProps = (state) => {
  console.log("this is the state in map state 2props",state.forumTopic.comments.user)
  return {comments: state.forumTopic.comments}
}

export default connect(mapStateToProps)(CommentIndex)