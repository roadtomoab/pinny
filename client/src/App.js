import './App.css';
import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Room } from "@material-ui/icons";

function App() {

  const [viewState, setViewState] = useState({
    longitude: -124,
    latitude: 40,
    zoom: 3.5
  });

  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{width: "100vw", height: "100vh"}}
      >
          <Marker
          longitude={-124}
          latitude={40}
          anchor="bottom"
          >
            <Room style={{ 
              width: 25,
              height: 25,
              color: "blue" }}/>
          </Marker>
      </Map>
    </div>
  );
}

export default App;
