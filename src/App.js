import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import {  myCategories, myCatImages, setDisplaySize } from './features/Cat/CatSlice';
import { Box } from '@mui/system';
import { ScreenSize } from './components/ScreenSize';
import { LinearProgress } from '@mui/material';
const Controller = React.lazy(() => import('./components/Controller'));
const  Filter = React.lazy(() => import('./components/Filter'));
const Images  = React.lazy(() => import( './components/Images'));
const Fun = React.lazy(() => import('./components/Fun'));
const NavBar = React.lazy(() => import('./components/NavBar'));
const SideBar = React.lazy(() => import('./components/SideBar'));



function App() {
  const [height, width ] = ScreenSize()
  const dispatch = useDispatch()
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    dispatch(setDisplaySize({
      height, 
      width
    }))
  }, [width, height])
  useEffect(() => {
    dispatch(myCatImages())
    dispatch(myCategories())
    const timer = setTimeout(() => {
      setDisplay(true)
    }, 3500)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  if(!display){
    return (
      <Suspense fallback={<LinearProgress/>}><Fun height={height} width={width} /></Suspense>
     
    )
  }
  
  return (
    <Box style={{maxWidth:"100vw", minHeight:"100vh"}} >
      <Suspense fallback={<LinearProgress/>}><NavBar/></Suspense>
      <Suspense fallback={<LinearProgress/>}><SideBar/></Suspense>
      <Box sx={{display:"flex", width:"100vw"}}>
        <Box sx={{width:width < 900? "0" : "20%"}}>
          <Suspense fallback={<LinearProgress/>}>
            <Filter/>
          </Suspense>
        </Box>
            <Box sx={{width:width < 900? "100%" : "80%"}}>  
            <Suspense fallback={<LinearProgress/>}>         
                <Images/>
            </Suspense>
            </Box>
      </Box>
      <Suspense fallback={"Loading"}>
        <Controller/>
      </Suspense>
    </Box>
  );
}

export default App;
