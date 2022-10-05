import React from 'react';
import { CircleMarker, GeoJSON, MapContainer } from 'react-leaflet';
import { useSelector } from '../../../hooks/useSelector';
import { selectStatisticsState } from '../../../store/selectors';
import { WORLD_GEO_DATA } from '../../../utils/constants';
import { getMapRadius, getMapZoom } from '../../../utils/helpers';
import CovidTooltip from './CovidTooltip/CovidTooltip';
import ZoomOnResize from './ZoomOnResize';

const geoJSONStyle = {
  color: '#626262',
  weight: 1,
  fillColor: '#1E1E1E',
  fillOpacity: 0.7,
};

const CovidMap: React.FC = () => {
  const { global, countries } = useSelector(selectStatisticsState);
  const zoom = getMapZoom();
  const globalCasesCount = global.cases;
  const countriesIndexByCases = Object.fromEntries(
    countries.map(({ country }, i) => [country, ++i]),
  );

  return (
    <MapContainer
      worldCopyJump={true}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      center={[50, 0]}
      zoom={zoom}
      zoomSnap={0.1}
      minZoom={zoom}
      maxZoom={5}>
      <GeoJSON data={WORLD_GEO_DATA} style={() => geoJSONStyle} />
      <ZoomOnResize />
      {countries.map(c => {
        const { cases, casesPerOneMillion, country, countryInfo } = c;
        const { lat, long, flag } = countryInfo;
        const radius = getMapRadius(
          cases,
          casesPerOneMillion,
          globalCasesCount,
        );

        return (
          <CircleMarker
            key={country}
            center={[lat, long]}
            radius={radius}
            fillOpacity={0.5}
            stroke={false}
            pathOptions={{ color: '#992323' }}>
            <CovidTooltip {...{ flag, c, countriesIndexByCases }} />
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default CovidMap;
