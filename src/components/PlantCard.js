export default function PlantCard({name, altName, imgURL, description, origin}){
  return <div className="card">
      {/* <img src={imgURL} alt={name}/> */}
        <h2>{name}</h2>
        <h3>{altName}</h3>
        <span className="origin"> {origin}</span>
      <p className="description">{description}</p>
  </div>
}