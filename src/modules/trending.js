import React, { Component } from 'react';

class Trending extends Component {
    state = {
        "hashtag" : this.props.trend.hashtag,
        "tweets" : this.props.trend.teweets
    }
    render() {
        return (
            <li class="list-group-item"><h3>{this.state.hashtag}</h3><h5>{this.state.tweets}</h5></li>
        );
    }
}

export default Trending;