import { connect } from 'react-redux'

function CommentCard({content, username}){

    return <div className="commentShow">
      {content}
      <br />
      by {username}
    </div>

}

export default connect(null)(CommentCard)