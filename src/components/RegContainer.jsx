import React from 'react'
import {connect} from 'react-redux'

import {setEmailTxt,setPassTxt,setRepeatPassTxt} from '../store/reg/actions'
import Reg from './Reg'

class RegContainer extends React.Component {

render(){
    return <Reg
      email={this.props.email}
      password={this.props.password}
      repeatPassword={this.props.repeatPassword}
      setEmailTxt={this.props.setEmailTxt}
      setPassTxt={this.props.setPassTxt}
      setRepeatPassTxt={this.props.setRepeatPassTxt}
    />
  }
}


const mapStateToProps = state => {
  return {
    email:state.reg.email,
    password:state.reg.password,
    repeatPassword:state.reg.repeatPassword,
  }
}

const mapDispatchToProps =  {
  setEmailTxt:setEmailTxt,
  setPassTxt:setPassTxt,
  setRepeatPassTxt:setRepeatPassTxt,
}

export default connect(mapStateToProps,mapDispatchToProps)(RegContainer)
