import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getForumTopics, postForumTopic } from "../redux/actionCreators"
import { ForumCard } from '../components/indexExports'

function ForumIndex({forumTopics}) {
  useEffect(getForumTopics, [getForumTopics]) 
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [picUrl, setPicUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    postForumTopic({title, content , picUrl})
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
        <input type="text" name="pictureUrl" value={picUrl} onChange={(e) => setPicUrl(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>


  return <>
    {createNewDiscussion()}
      <div className="messageBoardCards">
        HELLOOOO
      {forumTopics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
  </div>
  </>

}

const mapStateToProps = (state) => {
  return {forumTopics: state.forumTopics}
}

export default connect(mapStateToProps, {getForumTopics, postForumTopic})(ForumIndex)

