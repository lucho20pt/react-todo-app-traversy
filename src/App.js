import React, { Component } from 'react'
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
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
          completed : false
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

  // Toggle Complete Todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if(todo.id === id){
         todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter( todo => todo.id !== id)]
    })
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
            delTodo={this.delTodo}
          />
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App