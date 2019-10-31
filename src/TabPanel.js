import React from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}
export default TabPanel;
