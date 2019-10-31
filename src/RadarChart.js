import React from 'react';

import RadarChart from 'react-svg-radar-chart';

const data = [
  {
    data: {
      matrix1: 0.7,
      matrix2: 0.8,
      matrix3: 0.9,
      matrix4: 0.67,
      matrix5: 0.8
    },
    meta: { color: '#80cbc4' }
  },
];
const captions = {
  matrix1: 'Matrix1',
  matrix2: 'Matrix2',
  matrix3: 'Matrix3',
  matrix4: 'Matrix4',
  matrix5: 'Matrix5'
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

