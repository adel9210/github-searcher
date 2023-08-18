import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Entity} from "./definations";

export interface AppState {
    isLoading: boolean,
    searchTerm: string;
    searchEntity: Entity
}

let initialState: Partial<AppState> = {
    searchEntity: Entity.USERS
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        },
        setSearchEntity: (state, action: PayloadAction<Entity>) => {
            state.searchEntity = action.payload
        }
    },
})

export const {setSearchTerm, setSearchEntity} = appSlice.actions

export default appSlice.reducer
