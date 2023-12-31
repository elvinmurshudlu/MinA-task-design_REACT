import { useContext, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css'
import { Theme } from "../../contexts/ThemeContext";

export function MapComponent(){
  const theme = useContext(Theme)

    const mapEl = useRef()

    const   token = "pk.eyJ1IjoiZWx2aW5tdXJzaHVkbHUiLCJhIjoiY2xua2xyMmV6MXZqajJrdzVsNHNyZ2I0NCJ9.Zdc_PFFpzqDzum8kHTu7uA"
    mapboxgl.accessToken = token

    useEffect(()=>{

      try {
        const  map = new mapboxgl.Map({
          container: mapEl.current,
          style: `mapbox://styles/mapbox/${theme.theme ? 'dark':'light'}-v11` ,
  
          center: [28.9784, 41.0082],
          zoom: 8.5
        });
  
        map.on('load', () => {
          map.addSource('route', {
            'type': 'geojson',
            'data': '/istanbul-nufus-geo.geojson'
          });
  
          const colorStops = [
            [0, '#dede08'],
            [4000, '#deb308'],
            [10000, '#e0350a'],
  
          ];
          map.addLayer({
            'id': 'route',
            'type': 'fill',
            'source': 'route',
            paint: {
              'fill-color': {
                property: 'maas',
                stops: colorStops
              },
              'fill-opacity': 0.9
            }
          });
          map.addLayer({
            id: 'labels',
            type: 'symbol',
            source: 'route',
            layout: {
              'text-field': ['get', 'ILCEAD'],
              'text-size': 13,
              'text-anchor': 'center',
            },
            paint: {
              'text-color': 'white',
            }
          });
  
        });

    } catch (error) {
        console.error("Map initialization error:", error);
    }

        

    },[theme])


    return (<>

          <div className="map-container" >
                  <div className="map" ref={mapEl}></div>
          </div>

    
    </>)
}