import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CatAPI from "./CatAPI";


export const catState = (state) => state.cat


const initialState = {
    categories: null,
    images: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
    sidebar:false,
    selectedCategory:"",
    boxes:"",
    clothes:"",
    hats:"",
    sinks:"",
    space:"",
    sunglasses:"",
    ties:"",
    currentState:"",
    displaySize:"",
    page:{
      default:1,
      boxes:1,
      clothes:1,
      hats:1,
      sinks:1,
      space:1,
      sunglasses:1,
      ties:1,
    }
}


export const myCatImages = createAsyncThunk('/images/list', async(a=0,thunkAPI) => {
  try {
    const currentPage = thunkAPI.getState().cat.page["default"]
    const currentState = thunkAPI.getState().cat.images
      return await CatAPI.getImages(currentState, currentPage)
  } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)     
  }
})



export const myCategories = createAsyncThunk('/categories/list', async(thunkAPI) => {
    try {
        return await CatAPI.getCategories()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})


// Save categories function for each category
export const Boxes = createAsyncThunk('/images/boxes', async({selectedCategory}, thunkAPI) => {
  try {
    const {category} = selectedCategory
    const page =  thunkAPI.getState().cat.page.boxes
    const currentState = thunkAPI.getState().cat.boxes
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Clothes = createAsyncThunk('/images/clothes', async({selectedCategory}, thunkAPI) => {
  try {
        const {category} = selectedCategory

    const page =  thunkAPI.getState().cat.page.clothes
    const currentState = thunkAPI.getState().cat.clothes
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Hats = createAsyncThunk('/images/hats', async({selectedCategory}, thunkAPI) => {
  try {
        const {category} = selectedCategory

    const page =  thunkAPI.getState().cat.page.hats
    const currentState = thunkAPI.getState().cat.hats
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Sinks = createAsyncThunk('/images/sinks', async({selectedCategory}, thunkAPI) => {
  try {
        const {category} = selectedCategory

    const page =  thunkAPI.getState().cat.page.sinks
    const currentState = thunkAPI.getState().cat.sinks
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Space = createAsyncThunk('/images/space', async({selectedCategory}, thunkAPI) => {
  try {
        const {category} = selectedCategory

    const page =  thunkAPI.getState().cat.page.space
    const currentState = thunkAPI.getState().cat.space
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Sunglasses = createAsyncThunk('/images/sunglasses', async({selectedCategory}, thunkAPI) => {
  try {
        const {category} = selectedCategory

    const page =  thunkAPI.getState().cat.page.sunglasses
    const currentState = thunkAPI.getState().cat.sunglasses
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const Ties = createAsyncThunk('/images/ties', async({selectedCategory}, thunkAPI) => {
  try {
    
    const {category} = selectedCategory
    const page =  thunkAPI.getState().cat.page.ties
    const currentState = thunkAPI.getState().cat.ties
    return await CatAPI.getImagesbyCategory({category, page, currentState})
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)     
}
})

export const CatSlice = createSlice({
    name:"cat",
    initialState,
    reducers:{
        reset : (state) => {
            state.categories= null
            state.images= null
            state.isError= false
            state.isSuccess= false
            state.isLoading= false
            state.message=""
        },
        handleSidebar: (state) => {
            state.sidebar = !state.sidebar
        },
        selectCategory: (state, action) => {
          state.selectedCategory = action.payload
        },
        selectState: (state, action) => {
          state.currentState = action.payload
        },
        setDisplaySize: (state, action) => {
          state.displaySize = action.payload
        },
        setPage: (state, action) => {
          state.page[action.payload] += 1
        },
        prevPage: (state, action) => {
          state.page[action.payload] -= 1
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(myCategories.pending, (state) => {
            state.isLoading = true
          })
          .addCase(myCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.categories = action.payload
          })
          .addCase(myCategories.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.categories = ""
          })
          .addCase(myCatImages.pending, (state) => {
            state.isLoading = true
          })
          .addCase(myCatImages.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.images = action.payload
          })
          .addCase(myCatImages.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.images = null
          })
          .addCase(Boxes.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Boxes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.boxes = action.payload
          })
          .addCase(Boxes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.boxes = null
          })
          .addCase(Clothes.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Clothes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.clothes = action.payload
          })
          .addCase(Clothes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.clothes = null
          })
          .addCase(Hats.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Hats.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.hats = action.payload
          })
          .addCase(Hats.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.hats = null
          })
          .addCase(Sinks.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Sinks.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sinks = action.payload
          })
          .addCase(Sinks.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.sinks = null
          })
          .addCase(Space.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Space.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.space = action.payload
          })
          .addCase(Space.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.space = null
          })
          .addCase(Sunglasses.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Sunglasses.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sunglasses = action.payload
          })
          .addCase(Sunglasses.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.sunglasses = null
          })
          .addCase(Ties.pending, (state) => {
            state.isLoading = true
          })
          .addCase(Ties.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.ties = action.payload
          })
          .addCase(Ties.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.ties = null
          })
      
        }
}) 


export const {reset, handleSidebar, selectCategory, selectState, setDisplaySize, setPage, prevPage} = CatSlice.actions 
export default CatSlice.reducer