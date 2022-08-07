import Kot from './../static/cat.webp'
import { Box } from '@mui/system';
import Confetti from 'react-confetti'



const Fun = ({width , height}) => {
  return (
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height:"100vh"}}>
        <Confetti
      width={width}
      height={height}/>
        <img width={width} height={height} src={Kot} alt="Gif" />
      </Box>
)

}

export default Fun
