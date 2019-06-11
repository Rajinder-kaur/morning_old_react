import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
              {
                  this.props.match.params.info
              }  
            </div>
        );
    }
}

export default UserInfo;