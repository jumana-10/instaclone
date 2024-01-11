import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./Reducers"

export const store = configureStore({
    reducer: {data: rootReducer},
    
})


// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer);

// export default store;
