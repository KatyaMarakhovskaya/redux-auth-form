import React from 'react'
import {connect} from 'react-redux'

import {setEmailTxt,setPassTxt} from '../store/auth/actions'
import Auth from './Auth'

class AuthContaigner extends React.Component {

render(){
    return <Auth
       email={this.props.email}
       password={this.props.password} setEmailTxt={this.props.setEmailTxt} setPassTxt={this.props.setPassTxt}
    />
  }
}


const mapStateToProps = state => {
  return {
    email:state.auth.email,
    password:state.auth.password
  }
}

const mapDispatchToProps =  {
  setEmailTxt:setEmailTxt,
  setPassTxt:setPassTxt,
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContaigner)
