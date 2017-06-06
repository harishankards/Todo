import React, {Component} from 'react';
import '../App.css';
class QuotesApp extends Component{

  render(){
    let quotes = [
"This too, shall pass. —Anonymous",
"The only person you should try to be better than is the person you were yesterday. -Anonymous",
"More fuck yeah, less fuck that. —Anonymous",
"It's OK to not be OK, as long as you don't stay that way. —Anonymous",
"There is no elevator to success — you have to take the stairs. -Anonymous",
"Do not set yourself on fire in order to keep others warm. –Anonymous",
"Ask yourself if what you're doing today will get you closer to where you want to be tomorrow. —Anonymous",
"Life may not be the party we hoped for, but while we're here, we should dance. -Anonymous",
"In 20 years, you probably won't even remember this. –Anonymous"
]
  return(
      <div className="quotes-app">
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </div>
    );
  }
}


export default QuotesApp;
