import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }


  // saving new values with this function
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  // checking for empty fields
  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }



  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            // value makes this a controlled event
            onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button 
          type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
