import React from 'react';
import './signup.css';
import {ReactComponent as Logo} from './signup.svg';

export default class Signup extends React.Component {
    state = {
        email:'',
        pwd:'',
        name:'',
        course:''
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
            <div className="signup">
                <div className='div-signup-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name='email' placeholder='email' required onChange={this.handleChange} />
                        <input type="text" name='name' placeholder='Name' required onChange={this.handleChange} />
                        <input type="text" name='course' placeholder='Course' required onChange={this.handleChange} />
                        <input type="password" name='password' placeholder='password' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit} >Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
