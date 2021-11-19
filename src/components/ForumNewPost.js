import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { postForumTopic } from "../redux/actionCreators"

function ForumNewPost ({postForumTopic, user}) {

  const history = useHistory()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imgUrl, setImgUrl] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    postForumTopic({title, content , imgUrl, author: user}, history)  

  }

  const createNewDiscussion = () => <div className ="createDiscussion">
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>
        Content:
        <input type="textarea" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      </label>
      <label>
        Submit a Picture URL:
        <input type="text" name="pictureUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

  return createNewDiscussion()
    
}

const mapStateToProps = (state) => {
    return {user: state.user}
  }
  
  export default connect(mapStateToProps, { postForumTopic })(ForumNewPost)