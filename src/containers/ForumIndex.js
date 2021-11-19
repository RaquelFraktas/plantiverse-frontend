import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getForumTopics } from "../redux/actionCreators"
import { ForumCard, ForumNewPost } from '../components/indexExports'

function ForumIndex({getForumTopics, forumTopics}) {
  useEffect(getForumTopics, [getForumTopics]) 


  return <div className= "forumIndex">
    <ForumNewPost />
      <div className="messageBoardCards">
       Check out the discussions below
      {forumTopics.map(topic => <ForumCard {...topic} key={topic.id}/>)}
    </div>
  </div>

}

const mapStateToProps = (state) => {
  return {forumTopics: state.forumTopics, user:state.user}
}

export default connect(mapStateToProps, {getForumTopics})(ForumIndex)

