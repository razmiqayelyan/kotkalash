import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { catState } from '../features/Cat/CatSlice';
import { useSelector } from 'react-redux/es/exports';


function Media() {
  const {displaySize} = useSelector(catState)
  return (
    <Grid container wrap="wrap" spacing={2} sx={{ margin:5}}>
        {[...Array(9).keys()].map((i) => {
           return ( <Grid item xs={displaySize.width < 900?6:4} key={i}>
                 <Skeleton variant="rectangular"  xs={displaySize && displaySize.width < 900?displaySize.width < 450?8:6:4} height={250} />   
                <Box sx={{ pt: 0.5 }}>
                <Skeleton  xs={displaySize && displaySize.width < 900?displaySize.width < 450?8:6:4}  width={displaySize.width < 900?250:345}/>
                </Box>

            </Grid>)
        })}
    </Grid>
  );
}



export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}
