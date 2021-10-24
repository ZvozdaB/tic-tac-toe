import { createSlice } from '@reduxjs/toolkit'
import { AddPoint } from './function/addPoint'
import { CheckIfWon } from './function/checkIfWon';
import { Restart } from './function/restart';

export const Slise = createSlice({
    name: 'tic',
    initialState: {
        stateTic: [
            { id: 1, cross: false, zero: false },
            { id: 2, cross: false, zero: false },
            { id: 3, cross: false, zero: false },
            { id: 4, cross: false, zero: false },
            { id: 5, cross: false, zero: false },
            { id: 6, cross: false, zero: false },
            { id: 7, cross: false, zero: false },
            { id: 8, cross: false, zero: false },
            { id: 9, cross: false, zero: false },
        ],
        counter: 0,
        win: null,

    },
    reducers: {

        addPoint: AddPoint,
        checkIfWon: CheckIfWon,
        restart: Restart,


    }
})

export const {addPoint, checkIfWon, restart} = Slise.actions
export const reduser = Slise.reducer

