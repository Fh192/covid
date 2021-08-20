import React from 'react';

const DeathsIcon: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 20 27'
      fill='none'
    >
      <rect x='8' width='4' height='27' fill='white' />
      <rect
        x='20'
        y='6'
        width='4'
        height='20'
        transform='rotate(90 20 6)'
        fill='white'
      />
    </svg>
  );
};

export default DeathsIcon;
