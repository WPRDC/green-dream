import React, {Component} from 'react';
import Map from './components/Map'
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from "./components/Header";
import LayerControl from "./components/LayerControl"

class App extends Component {
  render() {
    return (
      <div className="flex-container">

        <Header className="flex-item"/>

        <div className="flex-item inner-flex-container">
          <div className="inner-flex-item">
            <div style={{height: '100%', width: '100%'}}>
              <Map/>
            </div>
          </div>
          <div className="inner-flex-item">
            <LayerControl/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
