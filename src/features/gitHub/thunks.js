import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getOpenPRsInfo = createAsyncThunk(
    'GET_OPEN_PRS_INFO',
    async (repoUrl, thunkAPI) => axios.get(`http://localhost:5000?url=${encodeURIComponent(repoUrl)}`).then(res => res.data)
)
