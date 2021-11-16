import { UserShow } from '../components/indexExports'

export default function HomePageShow({user}) {

    return <div className="homepage">
      Welcome to the site! Use the Navigation to browse 
      { user &&  <UserShow/> }
    </div>
  
  }