import React, { Component } from 'react';
import Tweet from './tweet';
import Menu from './menu';
import Trending from './trending';
import ToFollow from './tofollow';

class twitter extends Component {

    state = {
        tweets: [],
        menuItems: [],
        trends: [],
        toFollow: []

    }
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card" style={{ width: '18rem' }}>
                            <ul class="list-group list-group-flush">
                                {this.state.menuItems.map((e, i) => <Menu key={i} item={e} />)}
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        {this.state.tweets.map((e, i) => <Tweet key={i} tweet={e} />)}
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="md-form mt-0">
                                <input class="form-control" type="text" placeholder="Buscar en Twitter" aria-label="Search"></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" style={{ width: '18rem' }}>
                                    <ul class="list-group list-group-flush">
                                        {this.state.trends.map((e, i) => <Trending key={i} trend={e} />)}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            {this.state.toFollow.map((e, i) => <ToFollow key={i} tofollow={e} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        fetch('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json')
        .then(data => data.json())
        .then((res)=>{
            this.setState({tweets:res.tweets});
            this.setState({menuItems:res.menu});
            this.setState({trends:res.trends});
            this.setState({toFollow: res.tofollow});
            console.log(res.tweets);
        });
    }
}

export default twitter;