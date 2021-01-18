import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
import Todos from './components/Todos/Todos'
import AddTodo from './components/Todos/AddTodo'
import { v4 as uuidv4 } from 'uuid'
import About from './components/pages/About'

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
      <Router>

        <div className="App">

          <Header/>

          <main className="container">
          
            <Route exact path="/" render={ props => (

              <section className="Home | my-4">
                <div className="row">
                    <div className="col-12">
                        <h2>Home</h2>
                    </div>
                </div>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}

                />
              </section>

            )}/>

            <Route path="/about" component={About} />

          </main>

          <Footer/>

          </div>

      </Router>
    );
  }

}

export default App