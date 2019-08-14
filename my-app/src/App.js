import React, { Component } from "react";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from "./components/Post";

// export class App extends Component {
//   state = {
//     todos: [
//       { id: 1, content: "Buy Milk", priority: "High" },
//       { id: 2, content: "Cut the Grass", priority: "Low" },
//       { id: 3, content: "Drop off Mail", priority: "Moderate" },
//       { id: 4, content: "Get a haircut", priority: "High" }
//     ]
//   };

//   deleteToDo = id => {
//     const todos = this.state.todos.filter(todo => {
//       return todo.id !== id;
//     });
//     this.setState({
//       todos: todos
//     });
//   };

//   addToDo = todo => {
//     todo.id = Math.random();
//     const todos = [...this.state.todos, todo];
//     this.setState({
//       todos: todos
//     });
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <NavBar />
//           <Route path="/home" component={Home} />
//           <h1>My To Do List</h1>
//           <ToDos todos={this.state.todos} deleteToDo={this.deleteToDo} />
//           <AddToDo addToDo={this.addToDo} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

//React Router

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
