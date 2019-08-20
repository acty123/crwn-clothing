import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        };
    }

    handelSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''});
    }

    handelChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I alreadyhave an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <input name='email' type='email' onChange={this.handelChange} value={this.state.email} required />
                    <label>Email</label>
                    <input name='password' type='password' onChange={this.handelChange} value={this.state.password} required />
                    <label>Password</label>

                    <input type='submit' value='Submit form' />
                </form>
            </div>
        )
    }
}

export default SignIn;