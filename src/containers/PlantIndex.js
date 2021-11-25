import { useEffect, useState } from "react"
import { getPlants } from "../redux/actionCreators"
import { connect } from "react-redux"
import { PlantCard } from '../components/indexExports'
import Pagination from '@mui/material/Pagination';
import { useHistory, useLocation } from "react-router-dom"



function PlantIndex({plants, getPlants}){
  const location =useLocation()
  const history = useHistory()
  const [page, setPage] = useState(`?page=1`) 
  const pageFromParams = !location.search ? 1 : parseInt(location.search.match(/\d/)[0]) 

  const handleChange = (event, value) => {
    setPage(`?page=${value}`);
    history.push(`/plants?page=${value}`)
  };

  useEffect(()=> { !location.search? getPlants(page) : getPlants(location.search) 
  },[page, getPlants, location.search]) 


  return <div className="plantCards">
      {plants.map(plant => <PlantCard {...plant} key={plant.id}/>)}
      <Pagination count={8} color="primary" onChange={handleChange} page ={pageFromParams}/>
   
  </div>
}

const mapStateToProps = (state) => {
  return {plants: state.plants}
}

export default connect(mapStateToProps, { getPlants } )(PlantIndex)
