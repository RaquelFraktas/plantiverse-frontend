import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPlantToUser } from '../redux/actionCreators'

import InfoIcon from '@material-ui/icons/Info';

import { ImageListItemBar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0% , rgba(138,97,39,1) 80%, rgba(0,0,0,0) 100%)',
      // 'linear-gradient(to top, rgba(0,0,0,0.7) 0% , rgba(54,148,25,0.67) 80%, rgba(0,0,0,0) 100%)',
      borderRadius: '5px',
      padding: '10px',
      fontWeight: 600
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function PlantCard({id, name, altName, imgUrl, description, origin, addPlantToUser, user}){
  const history = useHistory()
  const [isHovered, setHover] = useState(false);
  const classes = useStyles();

  const handleAddPlantToCollection = (e) =>{
    e.preventDefault()
    addPlantToUser([user, id])
  }

  const redirectToPlantShow = (e)=>{
    e.preventDefault()
    history.push(`/plants/${id}`)
  }

  return (
    <div className="plantCard" 
    onMouseOver={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}>
 
      <Image src={imgUrl} alt={name} className="imgCard"/>
      {isHovered && (
        <Button className="addPlantButton" onClick={handleAddPlantToCollection} >
          Add Plant to Collection
        </Button>)}
        <br/>
        <ImageListItemBar
        className={classes.titleBar}
          title={name}
          subtitle={<span>{altName}</span>}
          actionIcon={
            <IconButton aria-label={`info about ${name}`} 
            className={classes.icon} onClick={redirectToPlantShow}>
              <InfoIcon />
            </ IconButton> 
          }
        />  
    </div>
  
  
  )
}

const mapStateToProps = (state) =>{
  return {...state}
}

export default connect(mapStateToProps ,{ addPlantToUser })(PlantCard)