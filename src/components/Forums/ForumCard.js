import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ForumCard (props) {

  return (
    <div className="forumCard" >
      <ListItem alignItems="flex-start" button component={Link} to={`/message_boards/${props.id}`}>
        <ListItemAvatar>
          <Avatar alt={props.user.username} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={props.title}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -{props.user.username}
              </Typography>
            </>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  )
  
}

const mapStateToProps =(state) => {
    return {...state.forumTopics}
}

export default connect (mapStateToProps)(ForumCard)