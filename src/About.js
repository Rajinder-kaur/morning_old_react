import React, { Component } from 'react';
import History from './History';
import Description from './Description';
import Loader from './Loader';
import UserInfo from './UserInfo';
import cookies from 'react-cookies';

import { Route, Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Default name',
            phone: 9915296866,
            users: [],
            loader: false
        };
        // console.log("Constructor fired");
        // console.log("Fired");
        // this.setName = this.setName.bind(this);
        // this.fetchUsers();
        if (cookies.load('access_token') === undefined) {
            this.props.history.push("/login");
        }
    }

    componentWillMount() {
        // console.log("Component will mount fired");        
    }
    componentDidMount() {
        // console.log("Component did mount fired");
    }


    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }

    fetchUsers = () => {
        this.toggleLoader();
        fetch("https://randomuser.me/api/?results=20")
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                this.setState({
                    users: result.results
                });
            })
            .catch((err) => {
                console.log(`Error while fetching users ${err}`);
            })
            .finally(() => {
                this.toggleLoader();
            })
    }

    setName = (e) => {
        // console.log(e.target.value);
        // console.log(this.state);
        // this.state.name = e.target.value;
        this.setState({
            name: e.target.value
        });
    }

    resetInput = () => {
        this.setState({
            name: 'Reset Input Fired',
            phone: 8699643192
        });
    }
    render() {
        // console.log("Render function fired");
        return (
            <div>About info goes here !!!
<Loader loader={this.state.loader} />
                <History username="God" year="2011">
                    Testing History
<input type="text"
                        onChange={this.setName}
                    />
                    <br />
                    {
                        this.state.name
                    }
                </History>
                <br />
                <button
                    onClick={this.fetchUsers}
                >Fetch Users</button>
                <br />
                <Link to="/about/description/1/david">Description</Link>
                <Link to="/about">About</Link>
                <Link to="/">App</Link>
                <br />

                <Route path="/about/description/:id/:info" component={Description} />
                {
                    this.state.phone
                }
                <br />
                <ul>
                    {
                        this.state.users.map((v, i) => {
                            return (
                                <li key={i}>
                                    {
                                        `${v.name.title} ${v.name.first} ${v.name.last}`
                                    }
                                    &nbsp; &nbsp;
                <Link to={`/about/user/${v.email}`}>Get Info</Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <br />
                <Route path="/about/user/:info" component={UserInfo} />
                <br />

                <button
                    onClick={this.resetInput}
                > Reset Input</button>
                <br />
            </div>
        );
    }

}

export default About;