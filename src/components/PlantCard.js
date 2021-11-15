import React from 'react'
import { useState } from 'react'
import { Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPlantToUser } from '../redux/actionCreators'

function PlantCard({id, name, altName, imgUrl, description, origin, addPlantToUser, user}){
  
  const [isHovered, setHover] = useState(false);

  const handleAddPlantToCollection = (e) =>{
    e.preventDefault()
    addPlantToUser([user, id])
  }

  return (
    <div className="card" 
    onMouseOver={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}>
      <Image src={imgUrl} alt={name} className="imgCard"/>
      {isHovered && (
        <Button className="addPlantButton" onClick={handleAddPlantToCollection} variant="primary" >
          Add Plant to Collection
        </Button>)}
        <Link to={`/plants/${id}`}> <h2>{name}</h2> </ Link>
        <h3>{altName}</h3>
        <span className="origin"> {origin}</span>

  </div>
  )
}

const mapStateToProps = (state) =>{
  return {...state}
}

export default connect(mapStateToProps ,{ addPlantToUser })(PlantCard)