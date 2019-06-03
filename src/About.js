import React, { Component } from 'react';
import History from './History';
import Description from './Description';

import {Route, Link} from 'react-router-dom';

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Default name',
            phone: 9915296866
        };
        // console.log("Fired");
        // this.setName = this.setName.bind(this);
    }

    // setname = ()=>{

    // }

    setName = (e) => {
        // console.log(e.target.value);
        // console.log(this.state);
        // this.state.name = e.target.value;
        this.setState({
            name: e.target.value
        });
    }

    resetInput = () =>{
        this.setState({
            name: 'Reset Input Fired',
            phone: 8699643192
        });
    }
    render() {
        return (
            <div>About info goes here !!!
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
                <br/>
                    <Link to="/about/description">Description</Link>
                    <Link to="/">App</Link>
                <br/>

                <Route path="/about/description" component={Description}/>
                    {
                        this.state.phone
                    }
                <br/>
                <button
                    onClick={this.resetInput}
                > Reset Input</button>
            </div>
        );
    }
}

export default About;