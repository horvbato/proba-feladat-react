// import React from 'react';
// import Posts from '../components/Posts/Posts'

// const app = () =>  {

//   const state = {
//     input: '',
//     posts: [
//       {
//         name: 'Bator'
//       },  
//       {
//         name: 'Efi'
//       },
//       {
//         name: 'Jani'
//       }
//     ]
//   }

//   componentDidMount() {
//     console.log('Mountolodtam')
//   }

//   return (
//     <div className="App">
//       <main className="App-header">
//         <input type="number" />
//         <button>Touch me pls</button>
//         <ul>
//           <Posts
//             posts={state.posts}
//           />
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default app;

import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Post from '../components/Post/Post'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      value: 1,
      dummyApiResponse: [
        [
          {type: 'h1', content: 'Hello'},
          {type: 'h2', content: 'Ez valami mas'},
          {type: 'h2', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h2', content: 'Mizuka van'},
          {type: 'h3', content: 'Ez valami mas'},
          {type: 'h3', content: 'Hello'},
          {type: 'h4', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h4', content: 'Ez valami mas'},
          {type: 'h4', content: 'Mizuka van'},
          {type: 'h4', content: 'Ez valami mas'},
        ],
        [
          {type: 'h1', content: 'Hello'},
          {type: 'h2', content: 'Ez valami mas'},
          {type: 'h2', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h2', content: 'Mizuka van'},
          {type: 'h3', content: 'Ez valami mas'},
          {type: 'h3', content: 'Hello'},
          {type: 'h4', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h4', content: 'Ez valami mas'},
          {type: 'h4', content: 'Mizuka van'},
          {type: 'h4', content: 'Ez valami mas'},
        ],
        [
          {type: 'h1', content: 'Hello'},
          {type: 'h2', content: 'Ez valami mas'},
          {type: 'h2', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h2', content: 'Mizuka van'},
          {type: 'h3', content: 'Ez valami mas'},
          {type: 'h3', content: 'Hello'},
          {type: 'h4', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h4', content: 'Ez valami mas'},
          {type: 'h4', content: 'Mizuka van'},
          {type: 'h4', content: 'Ez valami mas'},
        ],
        [
          {type: 'h1', content: 'Hello'},
          {type: 'h2', content: 'Ez valami mas'},
          {type: 'h2', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h2', content: 'Mizuka van'},
          {type: 'h3', content: 'Ez valami mas'},
          {type: 'h3', content: 'Hello'},
          {type: 'h4', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h4', content: 'Ez valami mas'},
          {type: 'h4', content: 'Mizuka van'},
          {type: 'h4', content: 'Ez valami mas'},
        ],
        [
          {type: 'h1', content: 'Hello'},
          {type: 'h2', content: 'Ez valami mas'},
          {type: 'h2', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h2', content: 'Mizuka van'},
          {type: 'h3', content: 'Ez valami mas'},
          {type: 'h3', content: 'Hello'},
          {type: 'h4', content: 'Ez meg egy nagyon hosszu szoveg hogy le tudjuk tesztelni hogy nem log e ki a  viewportbol.'},
          {type: 'h4', content: 'Ez valami mas'},
          {type: 'h4', content: 'Mizuka van'},
          {type: 'h4', content: 'Ez valami mas'},
        ]
      ]
    };

    this.handleInput = this.handleInput.bind(this);
  }

  callAPI(prop) {
    axios({
      method: 'post',
      url: 'http://localhost:9000/scraperAPI',
      data: {
        number: prop
      }
    })
    // .then(res => console.log(res))
    .then(res => this.setState({apiResponse: res.data}))
    // .then(res => this.setState({ apiResponse: res.data }))
    
    
    // get("http://localhost:9000/scraperAPI")
    //   .then(res => this.setState({ apiResponse: res.data }))
      // .then(res => res.text())
      // .then(res => this.setState({ apiResponse: res.data }));
  }

  // componentWillMount() {
  //   this.callAPI();
  // }

  handleInput(event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div className="posts-container">
        <input type="number" value={this.state.value} onChange={this.handleInput} />
        <button onClick={() => this.callAPI(this.state.value)}>
          Oh gosh touch me pls
        </button>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.value}</p>
        {this.state.dummyApiResponse.map((f) => {
          return ( 
            <Post
              post={f}
            />
          )
        })}
      </div>
    )
  }
}

export default App
