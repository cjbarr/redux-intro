import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';





class App extends Component {


  state={
    payload:''
  }

  handleClick1 = () => {
      this.props.dispatch({
        type: 'BUTTON_ONE'
      });
  }

  handleClick2 = () => {
    this.props.dispatch({
      type: 'BUTTON_TWO',
    });
  }


  addElement = () =>{

    this.props.dispatch({
      type: 'ADD_ELEMENT',
      payload: this.state.payload
    })
    this.setState({payload:''})
  }

  handleChange =(event) =>{
    this.setState({payload:event.target.value})

  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello</h1>
       <h2>{JSON.stringify(this.props.reduxState)}</h2>
       <button onClick={this.handleClick1}>Button One</button>
        <button onClick={this.handleClick2}>Button Two</button>

        <div>
          <input value={this.state.payload} placeholder="payload text" onChange={this.handleChange}></input>
          <button onClick={this.addElement}>Add Element</button>
          
          </div>

      </header>
    </div>
  );
}
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState,
  first: reduxState.firstReducer
})

export default connect(putReduxStateOnProps)(App);
