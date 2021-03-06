import React from 'react';
import {
  MapContainer,
  GeoJSON,
  CircleMarker,
  useMapEvent,
} from 'react-leaflet';
import { worldGeoData } from '../../../assets/worldGeoData';
import { useSelector } from '../../../hooks/useSelector';
import CovidTooltip from './CovidTooltip/CovidTooltip';

const getZoom = () => {
  const width = window.innerWidth;

  return width <= 350
    ? 0
    : width <= 400
    ? 0.3
    : width <= 475
    ? 0.5
    : width <= 560
    ? 0.7
    : width <= 680
    ? 1
    : width <= 800
    ? 1.2
    : 1.5;
};

function ZoomOnResize() {
  const map = useMapEvent('resize', () => {
    const zoom = getZoom();

    map.invalidateSize().setZoom(zoom);
    map.invalidateSize().setMinZoom(zoom);
  });

  return null;
}

const CovidMap: React.FC = () => {
  const { global, countries } = useSelector(s => s.statistics);

  const globalCasesCount = global.cases;
  const countriesIndexByCases = Object.fromEntries(
    countries.map((el, i) => [el.country, i + 1])
  );

  return (
    <MapContainer
      worldCopyJump={true}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      center={[50, 0]}
      zoom={getZoom()}
      zoomSnap={0.1}
      minZoom={getZoom()}
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
      <ZoomOnResize />

      {countries.map(c => {
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
  );
};

export default CovidMap;
