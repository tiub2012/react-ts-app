import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IData } from "../../models/IData"
import { appData } from './data'

interface AppState {
  data: IData
  index: number
  isShowHeader: boolean
  dynamicTitle: string
  dynamicSubtitle: string
}

const initialState: AppState = {
  data: appData,
  index: 0,
  isShowHeader: true,
  dynamicTitle: '',
  dynamicSubtitle: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIndex(state, action: PayloadAction<number>){
      state.index = action.payload
    },
    setDynamicTitle(state, action: PayloadAction<string>){
      state.dynamicTitle = action.payload
    },
    setDynamicSubtitle(state, action: PayloadAction<string>){
      state.dynamicSubtitle = action.payload
    },
    toggleIsShowHeader(state, action: PayloadAction<boolean>){
      state.isShowHeader = action.payload
    }
  }
})

export default appSlice.reducer