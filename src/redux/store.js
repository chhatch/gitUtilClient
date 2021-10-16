import { configureStore } from '@reduxjs/toolkit'
import { gitHubReducer } from '../features/gitHub/reducer'

export const appStore = configureStore({
    reducer: {
        gitHub: gitHubReducer,
    },
})
