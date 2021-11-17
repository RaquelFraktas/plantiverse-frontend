import { useEffect } from "react"
import { connect } from 'react-redux'
import { getForumTopics } from "../redux/actionCreators"
import { ForumCard } from '../components/indexExports'

function ForumIndex({forum_topics}) {
  useEffect(getForumTopics, [getForumTopics]) 
  return <>
      <div className="messageBoardCards">
        HELLOOOO
      {forum_topics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
  </div>
  </>

}

const mapStateToProps = (state) => {
  return {forum_topics: state.forum_topics}
}

export default connect(mapStateToProps, {getForumTopics})(ForumIndex)

