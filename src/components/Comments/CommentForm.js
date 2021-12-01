import { useState } from 'react'
import { connect } from 'react-redux'
import { postComment } from "../../redux/actionCreators"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function CommentForm ({postComment, currentUser, forumTopicId}) {

  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentUserId= currentUser.id
    postComment(content, forumTopicId, currentUserId) 
    setContent("") 
  }

  return <div className ="createComment">
    
    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '35ch' }}}
      onSubmit={handleSubmit}>
      <TextField
        id="outlined-multiline-static"
        label="Post your comment"
        multiline
        rows={3}
        style = {{width: 400}}
        // defaultValue="Post your comment"
        value={content} onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <Button variant="contained" size="small" type="submit" value="Submit" >Submit</Button>
      </ Box>
      
  </div>

}

// const mapStateToProps = (state) => {
//   return {...state.forumTopic}
// }

const mapStateToProps = (state) => ({forumTopicId: state.forumTopic.id, currentUser: state.user})

export default connect(mapStateToProps, {postComment})(CommentForm)