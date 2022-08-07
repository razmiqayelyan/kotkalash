import {   catState, prevPage, setPage } from '../features/Cat/CatSlice'
import {useDispatch, useSelector} from 'react-redux'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from './Image'
import LoadingImg from './LoadingImg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { animateScroll } from 'react-scroll/modules'


const Images = () => {
    const dispatch = useDispatch()
    const {currentState, isLoading, isSuccess, displaySize, selectedCategory, page} = useSelector(catState)
    if(isLoading || !isSuccess){
        return <LoadingImg/>
    }
    const getMoreImages = () => {
        if(selectedCategory.id === 'clear' || !selectedCategory){
          dispatch(setPage('default'))
        }else{
          dispatch(setPage(selectedCategory.name))
        }
        animateScroll.scrollToTop();
      }
    const backToPage = () => {
    if(page[selectedCategory.name] > 1 || ((selectedCategory.id === 'clear' || !selectedCategory) && page.default > 1)){
      if(selectedCategory.id === 'clear' || !selectedCategory){
        dispatch(prevPage('default'))
      }else{
        dispatch(prevPage(selectedCategory.name))
      }
      animateScroll.scrollToTop();
    }}
  return (
    <Box sx={{margin:5}}>
        <Grid container spacing={2}>
        {currentState && currentState.map((image) => (
        <Grid key={image.id} item xs={displaySize && displaySize.width < 900?displaySize.width < 450?8:6:4}>
            <Image displaySize={displaySize} image={image} />
        </Grid>
        ))}
        </Grid>
        <Box sx={{
          paddingTop:5,
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-around"
        }}>
              <Button startIcon={<NavigateBeforeIcon/>} onClick={backToPage}>{displaySize.width < 450? "": "Back"}</Button>
              <Typography>Page {page[selectedCategory.name] ||  page.default}</Typography>
             <Button endIcon={<NavigateNextIcon/>} onClick={getMoreImages}>{displaySize.width < 450? "": "Load More Cat Images"}</Button>
        </Box>
    </Box>
  )
}

export default Images
