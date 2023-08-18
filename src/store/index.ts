import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import appReducer  from './app.slice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, appReducer)


export const store = configureStore({
    reducer: {
        app: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
