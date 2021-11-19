import { connect } from 'react-redux'
import { CommentCard, CommentForm } from '../components/indexExports'


function CommentIndex() {

    return <div className ="commentContainer">
      this is in comment index
      <CommentForm />
      <CommentCard />
    </div>

}

export default connect(null)(CommentIndex)