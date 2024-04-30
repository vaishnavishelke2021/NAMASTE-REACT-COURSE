import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,             //contains small reducers ex: another reducer: user:userReducer
    },
});

export default appStore;