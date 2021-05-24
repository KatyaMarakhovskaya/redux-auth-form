import React from 'react'


export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
}

onEmailChange(event){
  this.props.setEmailTxt(event.target.value)
}

onPasswordChange(event){
  this.props.setPassTxt(event.target.value)
}

render(){
    return (
      <div className="Auth">

          <p>
            SIng in
          </p>

          <form>

            <input
              type = 'text'
              name = "login"
              placeholder = "Email"
              value = {this.props.email}
              onChange = {this.onEmailChange}
            />
            <br/>
            <input
              type = 'text'
              name = "password"
              placeholder = "Password"
              value = {this.props.password}
              onChange = {this.onPasswordChange}
            />
            <br/>

            <input type='button' value = 'send' />

          </form>

      </div>
    );
  }
}
