import React from 'react';

import RadarChart from 'react-svg-radar-chart';

const data = [
  {
    data: {
      metrics1: 0.7,
      metrics2: 0.8,
      metrics3: 0.9,
      metrics4: 0.67,
      metrics5: 0.8
    },
    meta: { color: '#556cd6' }
  },
];
const captions = {
  metrics1: 'Website Performance',
  metrics2: 'Google',
  metrics3: 'Oneflare ZQJ',
  metrics4: 'Business Authenticity ',
  metrics5: 'Experience'
};

const Radar = () => {
  return (
    <RadarChart
    style={{}}
      captions={captions}
      data={data}
      size={400}
      options={{
        scaleProps: () => ({ className: 'scale', fill: '#f5f5f5' }),
        zoomDistance: 1.1,
        axes: true,
        captionProps: () => ({
          className: 'caption',
          textAnchor: 'middle',
          fontSize: 12,
          fontFamily: 'sans-serif',
        }),
      }}
    />
  );
}

export default Radar;

