import React, { Component } from 'react';
import Posts from './posts/Posts';
import { Header, Footer } from './Components/HeaderFooter'
import pink from '@material-ui/core/colors/pink';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: pink
    }
})

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
            'https://www.reddit.com/r/skincareaddiction/top.json?limit=5',
            'https://www.reddit.com/r/naturalbeauty/top.json?limit=5',
            'https://www.reddit.com/r/AsianBeauty/top.json?limit=5',
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
        <MuiThemeProvider theme={theme}>

            <Header />
              <div className="App">
                  <h1>Reddit Beauty</h1>
                  <Posts posts={this.state.posts} />
              </div>
            <Footer />

        </MuiThemeProvider>

    );
  }
}

export default App;
