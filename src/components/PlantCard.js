import React from 'react'
import { useState } from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PlantCard({id, name, altName, imgUrl, description, origin}){
  
  const [isHovered, setHover] = useState(false);

  // const handleMouseHover = () =>{
  //   <button>{"Add to plant collection"}</button>

  // }

  return <div className="card"       
    onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <Image src={imgUrl} alt={name}/>
      {isHovered && (
        <Button variant="primary">Add Plant to Collection</Button>)}

        <Link to={`/plants/${id}`}> <h2>{name}</h2> </ Link>
        <h3>{altName}</h3>
        <span className="origin"> {origin}</span>

  </div>
}