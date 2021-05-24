import React from 'react'

export default class Reg extends React.Component {
  constructor(props) {
    super(props);


    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange=this.onRepeatPasswordChange.bind(this);
}

onEmailChange(event){
  this.props.setEmailTxt(event.target.value)
}

onPasswordChange(event){
  this.props.setPassTxt(event.target.value)
}

onRepeatPasswordChange(event){
  this.props.setRepeatPassTxt(event.target.value)
}

render(){
    return (
      <div className="Reg">

          <p>
            Registration
          </p>

          <form>

            <input
              type = 'text'
              name = "login"
              placeholder = "Email"
              spellCheck = {false}
              value = {this.props.email.value}
              onChange = {this.onEmailChange}
            />
              <br/>
            <input
              type = 'text'
              name = "password"
              placeholder = "Passwor"
              spellCheck = {false}
              value = {this.props.password.value}
              onChange = {this.onPasswordChange}
            />
              <br/>
              <input
                type = 'text'
                name = "password"
                placeholder = "Repeat passwor"
                spellCheck = {false}
                value = {this.props.repeatPassword.value}
                onChange = {this.onRepeatPasswordChange}
              />
              <br/>
            <input type='button' value = 'send' />

          </form>

      </div>
    );
  }
}
