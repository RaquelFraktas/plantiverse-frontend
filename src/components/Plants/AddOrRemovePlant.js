import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

function AddOrRemovePlantButton(props){

    const checkForPlantId = props.user.plants.map(userPlant=> userPlant.id === props.plantId)


    const renderAddPlantButton =() => <>

       {!checkForPlantId.includes(true) ? <Button className="addPlantButton" onClick={props.handleAddPlantToCollection}>Add Plant to Collection</Button> : <Button className="addPlantButton" onClick={props.removeFromPlantCollection} >Remove From Collection</Button>}
    </>
    

   return<>
      {renderAddPlantButton()}
    </>
}

const mapStateToProps = (state) =>{
  return {...state}
}


export default connect(mapStateToProps)(AddOrRemovePlantButton)