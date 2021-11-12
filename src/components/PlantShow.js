import { useParams} from 'react-router-dom'

export default function PlantShow(props){
    const routeID= useParams().id
    console.log(routeID)

    return <h1>this is the show page</h1>

}