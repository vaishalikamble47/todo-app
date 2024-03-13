import { configureStore } from '@reduxjs/toolkit'
import UserDetailSlice from '../Slice/UserDetailSlice'

export const store =configureStore({
  reducer:{
    userData:UserDetailSlice
  }
})