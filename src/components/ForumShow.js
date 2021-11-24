import { connect } from "react-redux";
import { useParams} from 'react-router-dom'
import { getForumTopic, clearForumTopic } from "../redux/actionCreators"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { CommentIndex } from "./indexExports"

function ForumShow({title, content, imgUrl, user, getForumTopic, id, clearForumTopic}) {
  const routeId = useParams().id
  const spinner = () => <div className="loader"></div>

  const loadedPage= () => <div className="forumShow">
    <div className="forumShowData">
      <h1>{title}</h1>
      {imgUrl && <img src={imgUrl} alt={title} className="forumPic"/>}
      <h3>{content}</h3>
        by {user.username}
    </div>
    <CommentIndex />
    <br />
    <Link to={`/message_boards/${parseInt(routeId) + 1}`} id="nextPage">Go to next Topic</Link>
  </div>

  useEffect(() => {
    getForumTopic(routeId)
    return clearForumTopic()
  }, [getForumTopic, routeId, clearForumTopic]) 

  return id ? loadedPage() : spinner()


}

const mapStateToProps= (state)=> {
    return {...state.forumTopic}
}

export default connect(mapStateToProps, { getForumTopic, clearForumTopic})(ForumShow)