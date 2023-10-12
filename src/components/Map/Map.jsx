import { useEffect, useRef } from "react";
import style from "./style.module.css"
import * as mapboxgl from 'mapbox-gl';

export function Map(){

    const mapEl = useRef()

    const   token = "pk.eyJ1IjoiZWx2aW5tdXJzaHVkbHUiLCJhIjoiY2xua2xyMmV6MXZqajJrdzVsNHNyZ2I0NCJ9.Zdc_PFFpzqDzum8kHTu7uA"
    mapboxgl.accessToken = token



    useEffect(()=>{

        const  map = new mapboxgl.Map({
            container: mapEl.current,
            style: `mapbox://styles/mapbox/dark-v11` ,
    
            center: [28.9784, 41.0082],
            zoom: 8.5
          });
    
          map.on('load', () => {
            map.addSource('route', {
              'type': 'geojson',
              'data': 'istanbul-nufus-geo.geojson'
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

    },[])


    return (<>

<div className={style["map-container"]} >

        <div className={style["map"]} ref={mapEl}>

        </div>


</div>

    
    </>)
}