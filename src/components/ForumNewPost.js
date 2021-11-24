import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { postForumTopic } from "../redux/actionCreators"
import Button from '@mui/material/Button'

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
    
    <Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="topicTitle" label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/> <br/>
      <TextField id="topicContent" label="Content" variant="outlined" multiline maxRows={4} value={content} onChange={(e) => setContent(e.target.value)}/> <br/>
      <TextField id="picUrl" label="Picture Url" variant="outlined" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/> 
      <br />
      <Button variant="contained" size="small" type="submit" value="Submit" >Submit</Button>
    </Box>

  </div>

  

  return createNewDiscussion()
    
}

const mapStateToProps = (state) => {
    return {user: state.user}
  }
  
  export default connect(mapStateToProps, { postForumTopic })(ForumNewPost)