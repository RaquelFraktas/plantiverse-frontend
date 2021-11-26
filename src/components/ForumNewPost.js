import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { postForumTopic } from "../redux/actionCreators"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ForumNewPost ({postForumTopic, user}) {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    postForumTopic({title, content , imgUrl, author: user}, history)  
  }

  const handleClickOpen = () => setOpen(true)
  const handleClose = () =>  setOpen(false)

  const FormDialog = () =><div className="formDialog">
    <Button variant="outlined" onClick={handleClickOpen}>
      Create a new discussion
    </Button>
    <Dialog open={open} onClose={handleClose} component="form" onSubmit={handleSubmit} >
      <DialogTitle>Post a new topic</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To post a new topic for discussion, please include the title, 
        content of the topic, and a url for a picture of your plant. 
        Make sure you have read the rules before posting.
      </DialogContentText>
        <TextField id="topicTitle" label="Title" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)}/> <br/>
        <TextField id="topicContent" label="Content" variant="standard" multiline maxRows={4} value={content} onChange={(e) => setContent(e.target.value)}/> <br/>
        <TextField id="picUrl" label="Picture Url" variant="standard" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/> 
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="small" type="submit" value="Submit" onClick={handleClose}>Submit</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
  
  return <div className="forumNpContainer">
      <h3>Before you create a new discussion, please read the guidelines below:</h3>
      <p className="guidelines">Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      {FormDialog()}
  </div>
    
}

const mapStateToProps = (state) => {
    return {user: state.user}
  }
  
  export default connect(mapStateToProps, { postForumTopic })(ForumNewPost)