export default function PlantCard({name, alt_name, img_url, description, origin}){
  return <div className="card">
      {/* <img src={img_url} alt={name}/> */}
        <h2>{name}</h2>
        <h3>{alt_name}</h3>
        <span className="origin"> {origin}</span>
      <p className="description">{description}</p>
  </div>
}