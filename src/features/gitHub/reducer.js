import { createReducer } from '@reduxjs/toolkit'
import { getOpenPRsInfo } from './thunks'

const initialState = { error: '', repoUrl: '', openPRs: [] }

export const gitHubReducer = createReducer(initialState, (builder) => {
    //builder should modify draftState XOR return a new state
    builder.addCase(getOpenPRsInfo.pending, (draftState, action) => {
        draftState.repoUrl = action.meta.arg
        draftState.openPRs = []
        draftState.error = ''
    })
    builder.addCase(getOpenPRsInfo.fulfilled, (draftState, action) => {
        draftState.openPRs = action.payload
    })
    builder.addCase(getOpenPRsInfo.rejected, (draftState, action) => {
        draftState.error = action.payload
        draftState.openPRs = []
    })
})
