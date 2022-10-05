import React from 'react';
import { useMapEvent } from 'react-leaflet';
import { getMapZoom } from '../../../utils/helpers';

const ZoomOnResize: React.FC = () => {
  const map = useMapEvent('resize', () => {
    const zoom = getMapZoom();

    map.invalidateSize().setZoom(zoom);
    map.invalidateSize().setMinZoom(zoom);
  });

  return null;
};

export default ZoomOnResize;
