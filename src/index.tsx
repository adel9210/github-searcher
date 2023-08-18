import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <App/>
        </Provider>
        </PersistGate>
    </BrowserRouter>
);
