import React, { Component } from 'react';

class tofollow extends Component {
    state={
        "avatar" : this.props.tofollow.avatar,
        "firstname": this.props.tofollow.first_name,
        "lastname" : this.props.tofollow.last_name,
        "nick" : this.props.tofollow.nick
    }
    render() {
        return (
            <div class="row">
                    <div class="col-md-2">
                        <img src={this.state.avatar} alt=""></img>
                    </div>
                    <div class="col-md-12">
                        <h5>{this.state.firstname} {this.state.lastname} </h5>
                        <h5 class="text-muted">{this.state.nick}</h5>
                    </div>
                </div>
        );
    }
}

export default tofollow;