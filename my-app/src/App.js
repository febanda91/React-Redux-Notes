import React, { useState, Component } from "react";
// import Nav from "./components/Nav";
// import ContactForm from "./components/ContactForm";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

// function App() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState(["Ryu", "Gohan", "Steve"]);
//   const [belt, setBelt] = useState("Black");

//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       <p>Welcome!</p>
//       <Ninjas name={name} age={age} belt={belt} />
//     </div>
//   );
// }

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 28, belt: "black", id: 1 },
      { name: "Gohan", age: 25, belt: "blue", id: 2 },
      { name: "Goku", age: 30, belt: "brown", id: 3 }
    ]
  };

  deleteNinja = id => {
    const newNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas: newNinjas
    });
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
