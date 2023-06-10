import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';

import { BriefInfo } from '../../components/BriefInfo/index.js';
import { InfoGlobal } from '../../components/InfoGlobal/index.js';
import { MainInfo } from '../../components/MainInfo/index.js';
import { NewBundle } from '../../components/NewBundle/index.js';
import { NewEntry } from '../../components/NewEntry/index.js';
// Components
import { PageWrapper } from '../../components/PageWrapper/index.js';
// Data
import { globalTrackingTabsData } from '../../data/globalTrackingTabs.js';
// Styles
import styles from './index.module.scss';

mapboxgl.accessToken =
    'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

export const GlobalTracking = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    const [activePopup, setActivePopup] = useState(null);
    const [activeTab, setActiveTab] = useState(globalTrackingTabsData[0].value);

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
        <PageWrapper>
            <div className={styles.tracking}>
                <MainInfo
                    title={'Global Tracking Test'}
                    icon={'track'}
                    setActivePopup={setActivePopup}
                />
                <div ref={mapContainer} className={styles.trackingMap} />
                {activePopup === 'new' && (
                    <NewEntry setActivePopup={setActivePopup} />
                )}
                {activePopup === 'brief' && (
                    <BriefInfo setActivePopup={setActivePopup} />
                )}
                {activePopup === 'info' && (
                    <InfoGlobal
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        setActivePopup={setActivePopup}
                    />
                )}
                {activePopup === 'newBundle' && (
                    <NewBundle setActivePopup={setActivePopup} />
                )}
            </div>
        </PageWrapper>
    );
};
