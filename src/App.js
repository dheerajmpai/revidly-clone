import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee);

import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
