import React, { Component } from 'react'
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
import Todos from './components/Todos/Todos'
import AddTodo from './components/Todos/AddTodo'
import { v4 as uuidv4 } from 'uuid';

import './App.scss'

class App extends Component {

  state = { 
    todos : [
      {
          id : uuidv4(),
          title : "Take out the trash",
          completed : false
      },
      {
          id : uuidv4(),
          title : "Go wash my car",
          completed : false
      },
      {
          id : uuidv4(),
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
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">

        <Header/>

        <main className="container">

          <AddTodo addTodo={this.addTodo} />

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