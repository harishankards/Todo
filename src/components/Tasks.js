import React, {Component} from 'react';
import '../App.css';
class Tasks extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="tasks">
        {this.props.items.map(item=>{
          return <button key={item.key} data-key={this.props.items.indexOf(item)} onClick={this.props.removeTask} className="task" >{item.text}</button>
        })}
      </div>
    );
  }
}


export default Tasks;
