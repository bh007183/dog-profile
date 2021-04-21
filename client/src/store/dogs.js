import {createSlice} from "@reduxjs/toolkit"
import DogCards from "../components/DogCards"

import {apiCallBegan} from "./apiActionCreators"

const slice = createSlice({
    name: "dogs",
    initialState: [],
    reducers:{
        dogsReceived: (dogs, action) => {
            dogs = action.payload
        },
        setDogs: (dogs, action) => {
            
            dogs.push({dogs: action.payload})
        }
            
        
    }
})



export const {setDogs, dogsReceived} = slice.actions

export default slice.reducer

export const loadDogs = () => apiCallBegan({
    url: "/dogs",
    onSuccess: setDogs.type
  })




