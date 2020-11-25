import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todos from './components/Todos/Todos';

import './App.scss';

class App extends Component {

  state = { 
    todos : [
      {
          id : 1,
          title : "Take ou the trash",
          completed : false
      },
      {
          id : 2,
          title : "Go wash your car",
          completed : false
      },
      {
          id : 3,
          title : "Bye milk",
          completed : false
      }
    ],
    users : [
      {
          id : 1,
          name : "Daniel"
      },
      {
          id : 2,
          title : "Lucho"
      },
      {
          id : 3,
          title : "Gonzales"
      }
    ]
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">

        <Header/>

        <main className="container">
          <Todos todos={this.state.todos} />
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App;