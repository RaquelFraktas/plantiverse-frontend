import { connect } from "react-redux";
import { useParams} from 'react-router-dom'
import { getForumTopic, clearForumTopic } from "../redux/actionCreators"
import { Link } from 'react-router-dom'
import { useEffect } from "react"

function ForumShow({title, content, imgUrl, user, getForumTopic, id, clearForumTopic}) {
  const routeId = useParams().id
  const spinner = () => <div className="loader"></div>

  const loadedPage= () => <div className="forumShow">
    <h1>hello from forum show</h1>
  
    <img src={imgUrl} alt={title}/>
    <h3>{title}</h3>
      by {user.username}
      {/* why cant i change it to author in my program? its initial state is author, but them automatically changes to user */}
    <p className="content">{content}</p>
    <Link to={`/message_boards/${parseInt(routeId) + 1}`}>Go to next Topic</Link>
  </div>

  useEffect(() => {
    getForumTopic(routeId)
    return clearForumTopic()
  }, [getForumTopic, routeId, clearForumTopic]) 

  return id ? loadedPage() : spinner()


}

const mapStateToProps= (state)=> {
    // console.log({...state.forumTopic})
    return {...state.forumTopic}
}

export default connect(mapStateToProps, { getForumTopic, clearForumTopic})(ForumShow)