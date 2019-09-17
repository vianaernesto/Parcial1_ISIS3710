import React, { Component } from 'react';

class Tweet extends Component {
    state = {
        "avatar" : this.props.tweet.avatar,
        "firstname": this.props.tweet.first_name,
        "lastname": this.props.tweet.last_name,
        "content" : this.props.tweet.content,
        "date" : this.props.tweet.date,
        "favs": this.props.tweet.favs,
        "nick" : this.props.tweet.nick,
        "retweets": this.props.tweet.retweets
    }
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <img src={this.state.avatar} alt=""></img>
                    </div>
                    <div class="col-md-10">
                        <h5>{this.state.firstname} {this.state.lastname} <h5 class="text-muted">{this.state.nick}</h5> {this.state.date} </h5><br></br>
                        <p>{this.state.content}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button type="button" class="btn btn-danger">Favorito {this.state.favs}</button>
                    </div>
                    <div class="col-md-6"><button type="button" class="btn btn-success">Retweet {this.state.retweets}</button></div>
                </div>
            </div>
        );
    }
}

export default Tweet;