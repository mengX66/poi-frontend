import React from 'react';
import RadarChart from 'react-svg-radar-chart';

const Radar = ({metrics}) => {
  const data = [
    {
      data: metrics,
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
  console.log(data)

  return (
    <RadarChart
    style={{}}
      captions={captions}
      data={data}
      size={parseInt(window.innerWidth / 3.35)}
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

