import React, { Component } from 'react';

import './Login.css'

class Login extends Component {
    state = {
        type: 'password',
        userName: '',
        password: '',
        passwordIcon : 'fa fa-fw fa-eye'
    }

    passwordTypeHandler = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text',
        passwordIcon: type === 'text' ? 'fa fa-fw fa-eye' : 'fa fa-fw fa-eye fa-eye-slash'
    }));

    onRememberMeHandler = () => {

    }; 
    
    onPasswordChangeHandler = () => {

    };

    onUserNameChangeHandler = () => {

    };

  render() {
    return (
      <div className="card Login">
        <article className="card-body">
          <h4 className="card-title text-center mb-4 mt-1">Login to lliad</h4>
          <form>
            <div className="form-group">
              <div className="input-group userName">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="" className="form-control" placeholder="Username" type="text"/>
              </div> 
            </div> 
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-key"></i> </span>
                </div>
                  <input id="password-field" className="form-control" placeholder="Password" type={this.state.type}/>
                  <span id="passIcon" toggle="#password-field" onClick={this.passwordTypeHandler} className={this.state.passwordIcon}></span>
              </div> 
            </div> 
            <div className="form-check mb-2 mr-sm-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineFormCheck"
                    onChange={this.onRememberMeHandler}/>
                <label className="form-check-label" htmlFor="inlineFormCheck">
                    Remember Me
                </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block loginBtn"> Login  </button>
            </div>
          </form>
        </article>
      </div> 
    );
  }
}

export default Login;
