import {connect} from 'react-redux'
import { useEffect } from "react"
import { clearErrors } from '../redux/actionCreators'

function NotFound({clearErrors}) {
  useEffect(clearErrors, [clearErrors])

   return <div className="incorrectRoute">
    <h1>404 - Not Found!</h1>
  </div>

}

export default connect(null, {clearErrors})(NotFound)