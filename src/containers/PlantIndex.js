import { useEffect, useState } from "react"
import { getPlants } from "../redux/actionCreators"
import { connect} from "react-redux"
import { PlantCard } from '../components/indexExports'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem'
import { Link, MemoryRouter, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom"



function PlantIndex({plants, getPlants}){
  const history = useHistory()
  const [searchParams, setSearchParams] = useState("")
console.log(searchParams)
  useEffect(()=>{ 
    !searchParams ? getPlants("") : getPlants(searchParams)
  }, [searchParams, getPlants]) 

 
  const paginate= (
  <MemoryRouter initialEntries={['/plants']} initialIndex={0}>
  <Route>
    {({ location }) => {
      {console.log({location})}
      const query = new URLSearchParams(location.search);
      const page = parseInt(query.get('page') || '1', 10);
      setSearchParams(location.search)
      
      return (
        <Pagination
          page={page}
          count={10}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/plants${item.page === 1 ? '' : `?page=${item.page}`}` }
              {...item}
            />
          )}
        />
      );
    }}
  </Route>
</MemoryRouter>
);

  return <div className="plantCards">
      {plants.map(plant => <PlantCard {...plant} key={plant.id}/>)}
      {paginate}
  </div>
}

const mapStateToProps = (state) => {
  return {plants: state.plants}
}

export default connect(mapStateToProps, { getPlants } )(PlantIndex)
