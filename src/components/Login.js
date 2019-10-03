import React, { Component } from 'react';

import './Login.css';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
      super(props);
      this.rememberMe = false;
      this.state = {
        type: 'password',
        userName: '',
        password: '',
        passwordIcon : 'fa fa-fw fa-eye',
        rememberMeFlag: false,
        isAuth: false
      };
    };

    passwordTypeHandler = () => this.setState(({type}) => ({
        type: type === 'text' ? 'password' : 'text',
        passwordIcon: type === 'text' ? 'fa fa-fw fa-eye' : 'fa fa-fw fa-eye fa-eye-slash'
    }));

    onRememberMeHandler = (rememberMeFlag) => {
      this.setState({rememberMeFlag: !rememberMeFlag});
      localStorage.setItem('rememberMeFlag', !this.state.rememberMeFlag);
      this.rememberMe = true;
      if(localStorage.getItem('rememberMeFlag')) {
        if(localStorage.getItem('userName')) {
          this.setState({userName: localStorage.getItem('userName')});
        }
        if(localStorage.getItem('password')) {
          this.setState({password: localStorage.getItem('password')});
        }
        localStorage.setItem('userName', this.state.userName);
        localStorage.setItem('password', this.state.password);
      }
    }; 
    
    onPasswordChangeHandler = (event) => {
      this.setState({password: event.target.value});
      localStorage.setItem('password', event.target.value);
    };

    onUserNameChangeHandler = (event) => {
      this.setState({userName: event.target.value});
      localStorage.setItem('userName', event.target.value);
    };

    onRegisterHandler = () => {
      this.props.history.push('/userRegistration');
    };

    validateForm () {
      return ((this.state.userName.length > 0 && this.state.password.length > 0) || (localStorage.getItem('rememberMeFlag') === 'true'));
    }

    onSubmitHandler = () => {
      axios.post('http://localhost:9000/api/login', {
        email: this.state.userName,
        password: this.state.password
      }).then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data['access_token']);
        localStorage.setItem('isAuth', response.data['access_token']);
        this.setState({
          userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : this.state.userName,
          password: localStorage.getItem('password') ? localStorage.getItem('password') : this.state.password,
          isAuth: true
        });
      },
      (error) => {
          alert('error logging', error);
      }).catch((error) => {
        alert('exception while login');
      });
    };

  render() {
    if(localStorage.getItem('rememberMeFlag') === 'false' && this.rememberMe === false) {
      localStorage.removeItem('userName');
      localStorage.removeItem('password');
    }
    if(!(localStorage.getItem('rememberMeFlag'))) {
      localStorage.removeItem('userName');
      localStorage.removeItem('password');
    }
    if (this.state.isAuth || localStorage.getItem('isAuth')) {
      return <Redirect to='/userRegistration' />
    }
    else {
      return (
        <div className="card Login cardBackGround">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Login to lliad</h4>
            <form>
              <div className="form-group">
                <div className="input-group userName">
                  <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                  </div>
                  <input name="" 
                    className="form-control" 
                    placeholder="Username" 
                    type="text"
                    value={localStorage.getItem('userName') ? localStorage.getItem('userName') : this.state.userName}
                    onChange={(event) => this.onUserNameChangeHandler(event)}/>
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
                      type={this.state.type}
                      value={localStorage.getItem('password') ? localStorage.getItem('password') : this.state.password}
                      onChange={(event) => this.onPasswordChangeHandler(event)}/>
                    <span 
                      id="passIcon" 
                      toggle="#password-field" 
                      onClick={this.passwordTypeHandler} 
                      className={this.state.passwordIcon}></span>
                </div> 
              </div> 
              <div className="form-check mb-2 mr-sm-2">
                  <input
                    disabled={!this.validateForm()}
                    className="form-check-input"
                    type="checkbox"
                    id="inlineFormCheck"
                    style={{cursor: 'pointer'}}
                    checked={(localStorage.getItem('rememberMeFlag') === 'true') ? (localStorage.getItem('rememberMeFlag') === 'true') : this.state.rememberMeFlag}
                    onChange={() => this.onRememberMeHandler(this.state.rememberMeFlag)}/>
                  <label className="form-check-label" htmlFor="inlineFormCheck">
                      Remember Me
                  </label>
              </div>
              <div className="form-group">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block loginBtn"
                  onClick={this.onSubmitHandler}
                  disabled={!this.validateForm()}> Login  </button>
              </div>
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <span>Are you not a member?<a style={{color: 'red', cursor: 'pointer'}} onClick={this.onRegisterHandler}> Register Now</a></span>
              </div>
            </form>
          </article>
        </div> 
      );
    }
  }
}

export default withRouter(Login);
