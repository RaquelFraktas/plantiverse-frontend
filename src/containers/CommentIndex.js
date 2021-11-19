import { connect } from 'react-redux'
import { CommentCard } from '../components/indexExports'

function CommentIndex() {

    return <div className ="commentContainer">
      this is in comment index
      <CommentCard />
    </div>

}

export default connect(null)(CommentIndex)