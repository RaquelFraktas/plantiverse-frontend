import { connect } from 'react-redux'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function CommentCard({content, username}){

    return <div className="commentShow">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={username} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={content}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -{username}
              </Typography>
            </>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
    </div>

}

export default connect(null)(CommentCard)