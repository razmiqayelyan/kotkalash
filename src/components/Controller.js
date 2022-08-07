import React, { useEffect }  from 'react'
import {  Boxes, catState, Clothes, Hats, myCatImages, selectState, Sinks, Space, Sunglasses, Ties } from '../features/Cat/CatSlice'
import {useDispatch, useSelector} from 'react-redux'


const Controller = () => {
    const dispatch = useDispatch()
    const {images, selectedCategory, boxes, clothes, hats, sinks, space, sunglasses, ties, page} = useSelector(catState)
    useEffect(() => {
        if (selectedCategory.name === 'boxes'){
            !boxes? dispatch(Boxes({selectedCategory})):dispatch(selectState(boxes[page.boxes]))
        }
        else if (selectedCategory.name === 'clothes'){
            !clothes? dispatch(Clothes({selectedCategory})):dispatch(selectState(clothes[page.clothes]))
        }
        else if (selectedCategory.name === 'hats'){
           !hats? dispatch(Hats({selectedCategory})): dispatch(selectState(hats[page.hats]))
        }
        else if (selectedCategory.name === 'sinks'){
            !sinks? dispatch(Sinks({selectedCategory})) : dispatch(selectState(sinks[page.sinks]))
        }
        else if (selectedCategory.name === 'space'){
           !space? dispatch(Space({selectedCategory})) : dispatch(selectState(space[page.space]))
        }
        else if (selectedCategory.name === 'sunglasses'){
            !sunglasses? dispatch(Sunglasses({selectedCategory})) : dispatch(selectState(sunglasses[page.sunglasses]))
        }
        else if (selectedCategory.name === 'ties'){
           !ties? dispatch(Ties({selectedCategory})) : dispatch(selectState(ties[page.ties]))
        }
        else{
            {images && dispatch(selectState(images[page.default]))}
        }
    }, [images, selectedCategory, boxes, clothes, hats, sinks, space, sunglasses, ties, dispatch])

    useEffect(() => {
        if (selectedCategory.name === 'boxes'){
          if(boxes && boxes[page.boxes]){
            dispatch(selectState(boxes[page.boxes]))
          }else dispatch(Boxes({selectedCategory}))
        }
        else if (selectedCategory.name === 'clothes'){
          if(clothes && clothes[page.clothes]){
            dispatch(selectState(clothes[page.clothes]))
          }else dispatch(Clothes({selectedCategory}))
        }
        else if (selectedCategory.name === 'hats'){
          if(hats && hats[page.hats]){
            dispatch(selectState(hats[page.hats]))
          }else  dispatch(Hats({selectedCategory}))
        }
        else if (selectedCategory.name === 'sinks'){
          if(sinks && sinks[page.sinks]){
            dispatch(selectState(sinks[page.sinks]))
          }else dispatch(Sinks({selectedCategory})) 
        }
        else if (selectedCategory.name === 'space'){
          if(space && space[page.space]){
            dispatch(selectState(space[page.space]))
          }else  dispatch(Space({selectedCategory})) 
        }
        else if (selectedCategory.name === 'sunglasses'){
          if(sunglasses && sunglasses[page.sunglasses]){
            dispatch(selectState(sunglasses[page.sunglasses]))
          }else dispatch(Sunglasses({selectedCategory}))
        }
        else if (selectedCategory.name === 'ties'){
          if(ties && ties[page.ties]){
            dispatch(selectState(ties[page.ties]))
          }else  dispatch(Ties({selectedCategory}))
        }
        else{
            if(images && images[page.default]){
                dispatch(selectState(images[page.default]))
            }else{
                dispatch(myCatImages())
            }
        }
    }, [page, dispatch])
  return (
    <>
      
    </>
  )
}

export default Controller
