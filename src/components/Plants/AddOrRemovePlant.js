import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

function AddOrRemovePlantButton(props){

  const checkForPlantId = props.user.plants.map(userPlant=> userPlant.id === props.plantId)
  
  const addButton = () => <Button className="addPlantButton" onClick={props.handleAddPlantToCollection}>Add Plant to Collection</Button>
  const removeButton = () => <Button className="addPlantButton" onClick={props.removeFromPlantCollection} >Remove From Collection</Button>
  const renderAddPlantButton = () => <> {!checkForPlantId.includes(true) ? addButton() : removeButton()}</>

  return <> {renderAddPlantButton()} </>
}

const mapStateToProps = (state) =>{
  return {...state}
}


export default connect(mapStateToProps)(AddOrRemovePlantButton)