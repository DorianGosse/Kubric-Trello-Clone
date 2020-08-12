import React, {Component} from 'react'; 
import Board from './pages/boards/Board';
import NavBar from "./components/navBar/NavBar";

class App extends Component {
    render(){
        return(
          <div className="app-container">
              <NavBar/>
              <Board boardTitle="Kubric UI"/>
          </div>
            )
    }
} export default App; 