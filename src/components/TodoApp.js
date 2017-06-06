import React, {Component} from 'react';
import Tasks from './Tasks';
import '../App.css';
class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: this.getStateFromStorage(),
      text: ''
    }
  }

  getStateFromStorage(){
    let Storage = window.localStorage;
    if(!Storage.getItem('items')){
      Storage.setItem('items', JSON.stringify([]));
      this.getStateFromStorage();
    } else if(Storage.getItem('items')){
      return JSON.parse(Storage.getItem('items'));
    }
  }

  saveData(){
    let Storage = window.localStorage;
    Storage.setItem('items', JSON.stringify(this.state.items));
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  removeTask(e){
    this.setState({items: this.state.items.filter(v=>{
      return this.state.items.indexOf(v) !== Number(e.target.dataset.key);
    })});
    this.saveData();
  }

  Submit(e){
    e.preventDefault();
    if(document.getElementById("todo").value !== ''){
      let newTask = {
        text: this.state.text,
        key: new Date()
      };
      this.setState((prevState)=>({
        items: prevState.items.concat(newTask),
        text: ''
      }));
      document.getElementById("todo").value = "";
    } else if(document.getElementById("todo").value === ''){
      alert("Please enter the a task!");
    }
    this.saveData();
  }

  render(){
    return(
      <div className="todolist-app">
        <div className="todolist-header">
          <h1>Pacifico</h1>
        </div>
        <Tasks items={this.state.items} removeTask={this.removeTask.bind(this)}/>
        <div className="todolist-footer">
          <form>
            <input id="todo" onChange={this.handleChange.bind(this)} type="text" placeholder="Add a task"/>
            <button onClick={this.Submit.bind(this)}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}


export default TodoApp;
