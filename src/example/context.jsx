import React, {Component, createContext} from 'react';
import logo from './logo.svg';
import './App.css';

const TestContext = React.createContext(100)

class Leaf extends Component{
  render(){
    return (
      < TestContext.Consumer>
        {
          value => <h1>value is: {value}</h1>
        }
      </TestContext.Consumer>

    )
  }
}
class Middle extends Component{
  render(){
    return <Leaf/>
  }
}

function App() {
  return (
    <div>
      <TestContext.Provider value={1000}>
        <Middle/>
      </TestContext.Provider>

    </div>
  );
}

export default App;
