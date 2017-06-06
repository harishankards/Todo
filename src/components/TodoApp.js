import React, {Component} from 'react';
import Tasks from './Tasks';
import '../App.css';
class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          text: 'Haa',
          key: new Date()
        }
      ],
      text: ''
    }
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  removeTask(e){
    this.setState({items: this.state.items.filter(v=>{
      return this.state.items.indexOf(v) !== Number(e.target.dataset.key);
    })})
  }

  Submit(e){
    e.preventDefault();
    let newTask = {
      text: this.state.text,
      key: new Date()
    };
    this.setState((prevState)=>({
      items: prevState.items.concat(newTask),
      text: ''
    }));
  }

  render(){
    return(
      <div className="todolist-app">
        <div className="todolist-header">
          <h1>HS</h1>
        </div>
        <Tasks items={this.state.items} removeTask={this.removeTask.bind(this)}/>
        <div className="todolist-footer">
          <form>
            <input onChange={this.handleChange.bind(this)} type="text" placeholder="Add a task"/>
            <button onClick={this.Submit.bind(this)}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}


export default TodoApp;
