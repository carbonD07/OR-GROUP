// fix-mui-components.tsx
import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

// Create a wrapper for Grid to handle the item prop correctly
export const Grid = (props: any) => {
  const { item, ...otherProps } = props;
  
  // For MUI v7, we need to explicitly set the component prop when using item
  if (item) {
    return <MuiGrid component="div" {...otherProps} />;
  }
  
  return <MuiGrid {...props} />;
};
