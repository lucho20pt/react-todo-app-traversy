import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Todos from './components/Todos/Todos'

import './App.scss'

class App extends Component {

  state = { 
    todos : [
      {
          id : 1,
          title : "Take out the trash",
          completed : false
      },
      {
          id : 2,
          title : "Go wash my car",
          completed : true
      },
      {
          id : 3,
          title : "Buy milk",
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

  markComplete = (id) => {
    // console.log("from app.js");
    // console.log(this.state.todos);
    console.log(id);
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">

        <Header/>

        <main className="container">
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
          />
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App