import { createSlice } from '@reduxjs/toolkit';
import apiHelper from '../../helpers/apiHelper';

const Auth = createSlice({
  name : "Auth",
  initialState:{
    errMsg: null,
    succMsg: null,
    fetching: false,
    employee: null,
  },
  reducer:{
    
  }
})
