import React, { useEffect, useState } from 'react';
import styles from './CovidMap.module.css';
import {
  MapContainer,
  GeoJSON,
  CircleMarker,
} from 'react-leaflet';
import { worldGeoData } from '../../../assets/worldGeoData';
import { Countries } from '../../../types/apiTypes';
import covidAPI from '../../../api/covidAPI';
import CovidTooltip from './CovidTooltip/CovidTooltip';

const CovidMap: React.FC = () => {
  const [statistic, setStatistic] = useState<Countries | null>(null);
  const [globalCasesCount, setGlobalCasesCount] = useState(0);
  const [countriesIndexByCases, setCountriesIndexByCases] = useState<{
    [k: string]: number;
  }>({});

  useEffect(() => {
    const fetchStatistic = async () => {
      const data = await covidAPI.getCountriesStats();

      setStatistic(data);

      const sortedData = data.sort((a, b) => b.cases - a.cases);

      const obj = {} as { [key: string]: number };
      sortedData.forEach((el, i) => {
        obj[el.country] = i + 1;
      });

      setCountriesIndexByCases(obj);
    };
    fetchStatistic();
  }, []);

  useEffect(() => {
    const fetchGlobalStat = async () => {
      const data = await covidAPI.getGlobalStats();

      setGlobalCasesCount(data.cases);
    };
    fetchGlobalStat();
  }, []);

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

        {statistic &&
          statistic.map(c => {
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
