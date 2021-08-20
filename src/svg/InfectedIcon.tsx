import React from 'react';

const InfectedIcon: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 24'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.8036 3.40479L26.8036 16.9048L25.1964 18.0952L15.1964 4.59524L16.8036 3.40479Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.8365 4.54802L7.33647 19.048L5.66354 17.952L15.1635 3.45197L16.8365 4.54802Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25 20H6V18H25V20Z'
        fill='white'
      />
      <circle cx='16' cy='4' r='4' fill='white' />
      <circle
        cx='25.6208'
        cy='18.4869'
        r='4'
        transform='rotate(150 25.6208 18.4869)'
        fill='white'
      />
      <circle
        cx='5.91503'
        cy='18.317'
        r='4'
        transform='rotate(150 5.91503 18.317)'
        fill='white'
      />
    </svg>
  );
};

export default InfectedIcon;
