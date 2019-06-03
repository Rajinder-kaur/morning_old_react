import React, { Component } from 'react';

class History extends Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                Nugen's History starts with 
                {
                    this.props.username
                }
                <br/>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default History;