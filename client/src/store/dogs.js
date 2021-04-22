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
        },
        newDogs: (dogs, action) => {
            
            dogs.push({dogs: action.payload})
        }
            
        
    }
})



export const {setDogs, newDogs, dogsReceived} = slice.actions

export default slice.reducer
export const getDogs = () => apiCallBegan({
    url: "https://dog.ceo/api/breeds/image/random",
    onSuccess: newDogs.type
})

export const loadDogs = () => apiCallBegan({
    url: "http://localhost:8080/api/dogs",
    onSuccess: setDogs.type
  })






