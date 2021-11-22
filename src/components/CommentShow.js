import { connect } from 'react-redux'

function CommentShow({content, user}){
// console.log("props from show page",props)
    return <div className="commentShow">
      {content}
      <br />
      {/* by {user.username} */}
    </div>

}

// const mapStateToProps = (state) => {
//     // console.log({...state.forumTopic.comments})
//   return {...state.forumTopic.comments }

// }

export default connect(null)(CommentShow)