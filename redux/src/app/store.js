import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../component/userReducer';
const store=configureStore({

    reducer:{
        //user
        users:userReducer
    }
})

export default store;