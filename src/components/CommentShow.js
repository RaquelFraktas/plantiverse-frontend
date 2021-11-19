import { connect } from 'react-redux'

function CommentShow({content, user}){

    return <div className="commentShow">
      {content}
      {/* by {user.username} */}
    </div>

}

const mapStateToProps = (state) => {
    console.log({...state.forumTopic.comments})
  return {...state.forumTopic.comments }

}

export default connect(mapStateToProps)(CommentShow)