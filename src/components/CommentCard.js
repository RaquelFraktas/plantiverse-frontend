import { connect } from 'react-redux'
import { CommentShow } from '../components/indexExports'


function CommentCard() {

    return <div className="commentCard">
        these are comment cards
        <CommentShow/>
    </div>

}

export default connect(null)(CommentCard)