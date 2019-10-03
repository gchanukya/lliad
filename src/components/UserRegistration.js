import React, { Component } from 'react';

import './UserRegistration.css'
import { withRouter } from 'react-router-dom';

class UserRegistration extends Component {
    state = {
        type: 'password',
        userRegName: '',
        regPassword: '',
        confirmPassword: '',
        passwordIcon: 'fa fa-fw fa-eye',
        confirmPassIcon: 'fa fa-fw fa-eye',
        confirmPasstype: 'password'
    }

    passwordTypeHandler = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text',
        passwordIcon: type === 'text' ? 'fa fa-fw fa-eye' : 'fa fa-fw fa-eye fa-eye-slash'
    }));

    confirmPasswordTypeHandler = () => this.setState(({confirmPasstype}) => ({
        confirmPasstype: confirmPasstype === 'text' ? 'password' : 'text',
        confirmPassIcon: confirmPasstype === 'text' ? 'fa fa-fw fa-eye' : 'fa fa-fw fa-eye fa-eye-slash'
    }));

    onLoginHandler = () => {
        localStorage.removeItem('isAuth');
        this.props.history.push('/');
    }; 
    
    onPasswordChangeHandler = () => {

    };

    onUserNameChangeHandler = () => {

    };

  render() {
    return (
      <div className="card userRegister">
        <article className="card-body">
          <h4 className="card-title text-center mb-4 mt-1">User Registration</h4>
          <form>
            <div style={{textAlign: 'center',marginBottom: '30px'}}>
              <span>Already have an account?<a style={{color: 'red', cursor: 'pointer'}} onClick={this.onLoginHandler}> Log in</a></span>
            </div>
            <div className="form-group">
              <div className="input-group userName">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="" 
                    className="form-control" 
                    placeholder="Username" 
                    type="text"/>
              </div> 
            </div> 
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-key"></i> </span>
                </div>
                  <input 
                    id="password-field" 
                    className="form-control" 
                    placeholder="Password" 
                    type={this.state.type}/>
                  <span id="passIcon" toggle="#password-field" onClick={this.passwordTypeHandler} className={this.state.passwordIcon}></span>
              </div> 
            </div> 
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-key"></i> </span>
                </div>
                  <input 
                    id="confirm-password-field" 
                    className="form-control" 
                    placeholder="Confirm Password" 
                    type={this.state.confirmPasstype}/>
                  <span id="confirmPassIcon" toggle="#confirm-password-field" onClick={this.confirmPasswordTypeHandler} className={this.state.confirmPassIcon}></span>
              </div> 
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block loginBtn"> Register  </button>
            </div>
          </form>
        </article>
      </div> 
    );
  }
}

export default UserRegistration;
