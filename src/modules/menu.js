import React, { Component } from 'react';

class menu extends Component {
    state = {
        "image" : this.props.item.image,
        "text" : this.props.item.text
    }
    render() {
        return (
            <li class="list-group-item"><img src={this.state.image} alt=""></img><h3>{this.state.text}</h3></li>
        );
    }
}

export default menu;