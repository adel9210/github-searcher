import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Entity} from "./definations";

export interface CounterState {
    isLoading: boolean,
    searchTerm: string;
    searchEntity: Entity
}

let initialState: Partial<CounterState> = {
    searchEntity: Entity.USERS
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        },
        setSearchEntity: (state, action: PayloadAction<Entity>) => {
            state.searchEntity = action.payload
        }
    },
})

export const {setLoading, setSearchTerm, setSearchEntity} = appSlice.actions

export default appSlice.reducer
