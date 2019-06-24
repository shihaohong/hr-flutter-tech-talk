import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'do the dishes',
        'take laundry to dry clean',
        'learn vue',
      ],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(item) {
    this.setState({
      todos: this.state.todos.concat(item),
    });
  }

  render() {
    return (
      <div className="App">
        <h1> To-Do List </h1>
        <AddTodo addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.item);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="item" value={this.state.item} onChange={this.handleChange} />
        </label>
        <button>Add Grocery</button>
      </form>
    );
  }
}

const Item = ({item}) => {
  return (<li>
    <span> {item} </span>
  </li>);
} 

const List = ({todos}) => {
  return (<ul>
    {todos.map((item, index) => <Item 
      key={index} 
      item={item}
    />)}
  </ul>);
}

export default App;
