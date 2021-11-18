import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getForumTopics, postForumTopic } from "../redux/actionCreators"
import { ForumCard } from '../components/indexExports'

function ForumIndex({postForumTopic, getForumTopics, forumTopics, user}) {
  useEffect(getForumTopics, [getForumTopics]) 
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    postForumTopic({title, content , imgUrl, author: user})
    // history.push(`/`)
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

console.log(forumTopics)
  return <>
    {createNewDiscussion()}
      <div className="messageBoardCards">
       Check out the discussions below
      {forumTopics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
  </div>
  </>

}

const mapStateToProps = (state) => {
  console.log(state.forumTopics)
  return {forumTopics: state.forumTopics, user:state.user}
}

export default connect(mapStateToProps, {getForumTopics, postForumTopic})(ForumIndex)

