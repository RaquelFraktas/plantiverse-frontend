import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ForumCard (props) {

  return (
    <div className="forumCard" >
      Hello from forum card
      
        <Link to={`/message_boards/${props.id}`}> <h2>{props.title}</h2> </ Link>

  </div>
  )


}

const mapStateToProps =(state) => {
    return {...state}
}

export default connect (mapStateToProps)(ForumCard)