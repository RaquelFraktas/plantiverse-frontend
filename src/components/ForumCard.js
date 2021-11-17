import React from 'react'
import { connect } from 'react-redux'

function ForumCard () {

  return (
    <div className="forumCard" >
      Hello from forum card
      
        {/* <Link to={`/message_boards/${id}`}> <h2>{title}</h2> </ Link>
        <h3>{altName}</h3>
        <span className="origin"> {origin}</span> */}

  </div>
  )


}

const mapStateToProps =(state) => {
    return {forum_card: state.forumCard}
}

export default connect (mapStateToProps)(ForumCard)