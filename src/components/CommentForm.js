import { useState } from 'react'
import { connect } from 'react-redux'
import { postComment } from "../redux/actionCreators"

function CommentForm ({postComment, currentUser, forumTopicId}) {

  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentUserId= currentUser.id
    postComment(content, forumTopicId, currentUserId)  
  }

  return <div className ="createComment">
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <input type="textarea" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

}

// const mapStateToProps = (state) => {
//   return {...state.forumTopic}
// }

const mapStateToProps = (state) => ({forumTopicId: state.forumTopic.id, currentUser: state.user})

export default connect(mapStateToProps, {postComment})(CommentForm)