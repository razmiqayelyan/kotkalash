import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import { useDispatch } from 'react-redux';
import {  handleSidebar } from '../features/Cat/CatSlice';


export default function NavBar() {
  const dispatch = useDispatch()
  const setSideBar = () => {
    dispatch(handleSidebar())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{width:"100vw"}}>
        <Toolbar>
          <IconButton
            onClick={setSideBar}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display:{xs:"block", sm:"block", md:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display:{xs:"none", sm:"none", md:"block"} }}
          >
            <PetsIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{paddingRight:5, display: { xs: 'none', sm: 'block' } }}
          >
            KotKalash
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
