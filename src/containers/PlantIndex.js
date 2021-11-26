import { useEffect, useState } from "react"
import { getPlants } from "../redux/actionCreators"
import { connect } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { PlantCard } from '../components/indexExports'
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList } from '@material-ui/core'
import { ImageListItem } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
    padding: '34px'
  },
}));


function PlantIndex({plants, getPlants}){
  const location =useLocation()
  const history = useHistory()
  const [page, setPage] = useState(`?page=1`) 
  const pageFromParams = !location.search ? 1 : parseInt(location.search.match(/\d/)[0]) 
  
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(`?page=${value}`);
    history.push(`/plants?page=${value}`)
  };

  useEffect(()=> { !location.search? getPlants(page) : getPlants(location.search) 
  },[page, getPlants, location.search]) 


  return <div className="plantCards">
    <div className={classes.root}>
    <ImageList rowHeight={300}  gap={30} className={classes.gridList}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>

      {plants.map((plant) => 
      <ImageListItem key={plant.id}>
        <PlantCard {...plant} key={plant.id} />
      </ImageListItem>
      )}
      </ImageList>
      </div>
      
      <Pagination count={9} color="primary" onChange={handleChange} page ={pageFromParams}/>
   
  </div>
}

const mapStateToProps = (state) => {
  return {plants: state.plants}
}

export default connect(mapStateToProps, { getPlants } )(PlantIndex)
