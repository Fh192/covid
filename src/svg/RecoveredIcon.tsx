import React from 'react';

const RecoveredIcon: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 21 21'
      fill='none'
    >
      <rect x='8' width='5' height='21' fill='white' />
      <rect
        x='21'
        y='8'
        width='5'
        height='21'
        transform='rotate(90 21 8)'
        fill='white'
      />
    </svg>
  );
};

export default RecoveredIcon;
