import React, { Component } from 'react';
import JavaScript from './JavaScript';
import Python from './Python';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'JavaScript'
    }
  }
  componentWillMount() {
    this.loadJavaScript.bind(this);
  }
  loadJavaScript() {
    this.setState({currentPage: 'JavaScript'});
  }
  loadJava() {
    this.setState({currentPage: 'Python'});
  }

  render() {
    let component = this.state.currentPage;
    let renderedComponent;
    if (component.includes('JavaScript')) {
      renderedComponent = <JavaScript/>;
    } else if(component.includes('Python')){
      renderedComponent = <Python/>;
    }
    return (
      <div>
        <div className="header">
          <button className="btn" onClick={this.loadJavaScript.bind(this)}>JavaScript</button>
          <button className="btn" onClick={this.loadJava.bind(this)}>Python</button>
        </div>
        {renderedComponent}
      </div>
    )
  }
}

export default App;
