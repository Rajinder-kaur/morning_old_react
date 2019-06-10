import React, { Component } from 'react';
import cookies from 'react-cookies';
import Loader from './Loader';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loader: false
        };
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }
    login = () => {
        // console.log(this.state);
        this.toggleLoader();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        fetch("http://35.175.245.127/api/v1/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                console.log(result);
                if (result.access_token !== undefined) {
                    cookies.save('access_token', result.access_token);
                    this.props.history.push("/about");
                } else {
                    alert(result.msg);
                }
            })
            .catch((err) => {
                console.log(`Error while login ${err}`);
            })
            .finally(() => {
                this.toggleLoader();
            })
    }
    render() {
        return (
            <div>
                <Loader loader={this.state.loader} />
                Enter email :- <input type="text"
                    onChange={this.handleEmail}
                /> <br />
                Enter password :- <input type="password"
                    onChange={this.handlePassword}
                /> <br />
                <button
                    onClick={this.login}
                >Login</button> <br />
                {
                    this.state.email
                }
            </div>
        );
    }
}

export default Login;