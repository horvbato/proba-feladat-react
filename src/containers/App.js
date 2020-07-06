// import React from 'react';
// import './App.css';
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
import axios from 'axios'
// import Posts from '../components/Posts/Posts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      value: 1
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
      <div>
      <input type="number" value={this.state.value} onChange={this.handleInput} />
      <button onClick={() => this.callAPI(this.state.value)}>
        Oh gosh touch me pls
      </button>
      <p className="App-intro">;{this.state.apiResponse}</p>
      <p className="App-intro">;{this.state.value}</p>
      </div>
    )
  }
}

export default App
