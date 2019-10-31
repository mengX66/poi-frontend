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
    meta: { color: '#80cbc4' }
  },
];
const captions = {
  metrics1: 'metrics1',
  metrics2: 'metrics2',
  metrics3: 'metrics3',
  metrics4: 'metrics4',
  metrics5: 'metrics5'
};
const Radar = () => {
  return (
    <RadarChart
      captions={captions}
      data={data}
      size={300}
      options={{
        scaleProps: () => ({ className: 'scale', fill: '#f5f5f5' }),
        // dots: true,'
        zoomDistance: 1.3,
        axes: true,
        captionProps: () => ({
          className: 'caption',
          textAnchor: 'middle',
          fontSize: 12,
          fontFamily: 'sans-serif'
        }),
      }}
    />
  );
}

export default Radar;

