import { Box, Tab } from '@mui/material';
import { TabList, TabContext } from '@mui/lab';
import React from 'react';

const EiWebContainer = () => {
  const [ value, setValue ] = React.useState(0);
  
  const handleChange = (e, val) => {
    console.log('VAL: ' + val);
    setValue( val );
  };

  if( value === undefined ) {
      setValue( '0' )
  }

  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Item One' value='0' />
            <Tab label='Item Two' value='1' />
            <Tab label='Item Three' value='2' />
          </TabList>
        </Box>
        <TabPanel value={value} index='0'>
          Item One
        </TabPanel>
        <TabPanel value={value} index='1'>
          Item Two
        </TabPanel>
        <TabPanel value={value} index='2'>
          Item Three
        </TabPanel>
      </TabContext>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div>
        { value === index && (
            <h1>{ children }</h1>
        ) }
    </div>
  );
};

export default EiWebContainer;
