import React from "react";
import DestinationList from "./components/DestinationList";
import "./App.css";
import Chart from "./components/BarChart";
import destinations from "./data";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from './components/Map';

function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  })

  return (
    <div className="App">
      <h1>Tourism Destinations</h1>
      
      <DestinationList />
      { isLoaded ? <Map markers={destinations} /> : <h2>Loading</h2> }
      <Chart destinations={destinations} />
    </div>
  );
}

export default App;
