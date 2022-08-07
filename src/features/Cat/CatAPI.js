import axios from "axios"


const getCategories = async() => {
    const {data} = await axios("https://api.thecatapi.com/v1/categories")
    return [{id:'clear', name:"Clear Filter"} ,...data]
}

const getImages = async(currentState, page) => {
    if(currentState && page !== 1){
        const {data} = await axios(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`)
        return ({...currentState, [page]:data})
    }else{
        const {data} = await axios("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
        return {[page]:data}
    }
}

const getImagesbyCategory = async({category, page, currentState}) => {
    if(!currentState){
        const {data} = await axios(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`)
        return {[page]:data}
    }else  if(!currentState[page]){
        const {data} = await axios(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`)
        return {...currentState, [page]:data}
}
    else{
        return currentState
    }
}


const CatAPI = {
    getCategories,
    getImages,
    getImagesbyCategory
}
export default CatAPI
