import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../store";
 
const initialState = {
  value: 0
}

export const counterSlice2 = createSlice({
  name: "counter2",
  initialState,
  reducers:{
      incrementCount: state =>{
      state.value += 1
        },
        decrementCount: state => {
          if (state.value >= 0){
              state.value -= 1 
          }  
            state.value = 0
        },

      incrementByPayload: (state, action )=> {
       state.value += action.payload
  }
  }
})

export const {incrementCount, decrementCount, incrementByPayload} = counterSlice2.actions

export const selectCount2 = (state: any) => state.counter2.value

export default counterSlice2.reducer
