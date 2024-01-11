import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//         <App />
//     </Provider>
// );

