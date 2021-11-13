import React from 'react'
import { Link } from 'react-router-dom'

export default function PlantCard({id, name, altName, imgUrl, description, origin}){
  return <div className="card">
      <img src={imgUrl} alt={name}/>
        <Link to={`/plants/${id}`}> <h2>{name}</h2> </ Link>
        <h3>{altName}</h3>
        <span className="origin"> {origin}</span>

  </div>
}