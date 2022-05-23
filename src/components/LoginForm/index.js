import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    // if(response.ok === true){
    //     onSubmitSuccess()
    // }
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-mobile"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <form className="form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />
          <div className="username-container">
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onUsernameChange}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              id="password"
              type="text"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
