import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {   ListSubheader } from '@mui/material';
import {  useSelector } from "react-redux"
import { catState } from '../features/Cat/CatSlice';
import ComponentBtn from './ComponentBtn';


export default function Filter() {
  const { isSuccess, categories} = useSelector(catState)

   return (
    <Box sx={{ position:"fixed" , backgroundColor:"red", display:{xs:"none",sm:'none', md:"block"}}}>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List  subheader={
        <ListSubheader sx={{fontSize:"1.2rem", position:"static"}} component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      } 
      component="nav" aria-label="secondary mailbox folder">
       {isSuccess && categories.map((category, index) => <ComponentBtn  key={category.id} category={category} index={index}/>)}
      </List>
    </Box>
    </Box>
  );
}
