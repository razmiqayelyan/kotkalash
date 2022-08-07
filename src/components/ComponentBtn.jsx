import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import NoiseControlOffIcon from '@mui/icons-material/NoiseControlOff';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { catState, selectCategory } from '../features/Cat/CatSlice';

const ComponentBtn = ({category, index}) => {
  const {selectedCategory} = useSelector(catState)
  const dispatch = useDispatch()

 
  return (
    <ListItem 
       onClick={() => {
        if(category.id !== 'clear') dispatch(selectCategory({ index,category:category.id, name:category.name}))
        else(dispatch(selectCategory("")))
      }} 
      key={category.id} disablePadding>
      <ListItemButton selected={selectedCategory.index === index && index !== 0? true: false}>
      {category.id === 'clear'?
        <ListItemIcon>
        <ClearIcon/> 
        </ListItemIcon>:
        <ListItemIcon>
            <NoiseControlOffIcon sx={{color:"lightgray"}} fontSize='small'/>
        </ListItemIcon>}
        <ListItemText primary={category.name} />
      </ListItemButton>
    </ListItem>
  )
}

export default ComponentBtn
