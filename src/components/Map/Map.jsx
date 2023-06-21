import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken =
    'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-71.03, 42.56],
            },
            properties: {
                name: 'Trailer 4438',
                date: 'June 10',
                speed: '23 mph',
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-71.30, 42.16],
            },
            properties: {
                name: 'Trailer 4438',
                date: 'June 10',
                speed: '23 mph',
            },
        },
    ],
};

export const Map = ({ sx }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/slavkahitriy/clbzh0yqj002d14nyss1sjga2/draft',
                center: [lng, lat],
                zoom: zoom,
            });

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });

            map.current.on('click', (e) => {
                console.log(e);
            });

            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add it to the map
                new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat(feature.geometry.coordinates)
                    .setHTML(
                        `<div class="marker-wrapper">
                            <h3 class="marker-title">${feature.properties.name}</h3>
                            <div class="marker-bottom">
                                <div class="marker-date">${feature.properties.date}</div>
                                <div class="marker-speed">${feature.properties.speed}</div>
                            </div>
                            <div class="marker-icon"></div>
                            <div class="marker-bar"></div>
                        </div>
                        `
                    )
                    .addTo(map.current);
            }
        }
    };

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (map.current) clearInterval(tempInterval);
            else initMap();
        }, 100);

        return () => clearInterval(tempInterval);
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            ref={mapContainer}
        />
    );
};
