import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { catState, handleSidebar } from '../features/Cat/CatSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  ListSubheader } from '@mui/material';
import ComponentBtn from './ComponentBtn';

export default function SwipeableTemporaryDrawer() {
  const {sidebar, categories, isSuccess} = useSelector(catState)
  const state = {state:sidebar}
  const dispatch = useDispatch()
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    dispatch(handleSidebar())
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List subheader={
        <ListSubheader sx={{ position:"static"}} component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>} >
        {isSuccess && categories?.map((category, index) => <ComponentBtn key={category.id} category={category} index={index} />)}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <SwipeableDrawer
            anchor={'left'}
            open={state.state}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list({left:"left"})}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
