import React from 'react';
import styles from './CovidMap.module.css';
import { MapContainer, GeoJSON, CircleMarker } from 'react-leaflet';
import { worldGeoData } from '../../../assets/worldGeoData';
import { Countries, Global } from '../../../types/apiTypes';
import CovidTooltip from './CovidTooltip/CovidTooltip';

interface Props {
  countriesStatistic: Countries;
  globalStatistic: Global;
}

const CovidMap: React.FC<Props> = ({ countriesStatistic, globalStatistic }) => {
  const globalCasesCount = globalStatistic.cases;
  const countriesIndexByCases = Object.fromEntries(
    countriesStatistic
      .sort((a, b) => b.cases - a.cases)
      .map((el, i) => {
        return [el.country, i + 1];
      })
  );

  return (
    <div className={styles.covidMap}>
      <MapContainer
        worldCopyJump={true}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        center={[50, 0]}
        zoom={1.5}
        zoomSnap={0.1}
        minZoom={1.5}
        maxZoom={5}
      >
        <GeoJSON
          data={worldGeoData}
          style={() => ({
            color: '#626262',
            weight: 1,
            fillColor: '#1E1E1E',
            fillOpacity: 0.7,
          })}
        />

        {countriesStatistic.map(c => {
          const { lat, long, flag } = c.countryInfo;

          return (
            <CircleMarker
              key={c.country}
              center={[lat, long]}
              radius={Math.max(
                Math.log((c.cases * c.casesPerOneMillion) / globalCasesCount),
                2
              )}
              fillOpacity={0.5}
              stroke={false}
              pathOptions={{ color: '#992323' }}
            >
              <CovidTooltip {...{ flag, c, countriesIndexByCases }} />
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
