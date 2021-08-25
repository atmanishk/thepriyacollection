import React, { Component } from 'react';
import './login.css';
import {ReactComponent as Logo} from './login.svg';

export default class Login extends Component {

    state = {
        email:'',
        pwd:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="login">
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name='email' placeholder='email' required onChange={this.handleChange} />
                        <input type="password" name='password' placeholder='password' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit} >Log In Into your account</button>
                    </form>
                </div>
            </div>
        )
    }
}

