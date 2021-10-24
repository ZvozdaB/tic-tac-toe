import { configureStore } from '@reduxjs/toolkit'
import { reduser } from './Slice'

export default configureStore({
    reducer: {
        tic: reduser
    },
})