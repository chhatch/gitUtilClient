import { createAsyncThunk } from '@reduxjs/toolkit'

export const getOpenPRsInfo = createAsyncThunk(
    'GET_OPEN_PRS_INFO',
    async (repoUrl, thunkAPI) => await Promise.resolve({})
)
