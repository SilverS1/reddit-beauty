import React, { Component } from 'react';
import Posts from './posts/Posts';

class App extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let urls = [
            'https://www.reddit.com/r/skincareaddiction/top.json?limit=3',
            'https://www.reddit.com/r/naturalbeauty/top.json?limit=3',
            'https://www.reddit.com/r/AsianBeauty/top.json?limit=3',
        ];

        Promise.all(urls.map(url =>
            fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let posts = data.data.children.map((post, id) => {
                    return (post)
                });
                this.setState({
                    posts: this.state.posts.concat(posts)
                });

            })
        ));

    }

  render() {
    return (
      <div className="App">
          <h1>FABULOUS</h1>
          <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
