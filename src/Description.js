import React, { Component } from 'react';

class Description extends Component {

    render() {
        console.log(this.props.match.params);
        return (
            <div>
                Description Component goes here !!! with 
                <br/>
                {
                    `${this.props.match.params.id} has name ${this.props.match.params.info}`
                }
            </div>
        );
    }
}

export default Description;