import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getOpenPRsInfo = createAsyncThunk(
    'GET_OPEN_PRS_INFO',
    async (repoUrl, { rejectWithValue }) =>
        axios
            .get(`http://localhost:5000?url=${encodeURIComponent(repoUrl)}`)
            .then((res) => res.data)
            .catch((e) => {
                console.error(JSON.stringify(e, Object.getOwnPropertyNames(e), 4))
                return rejectWithValue(e?.response?.data || e.message)
            })
)
