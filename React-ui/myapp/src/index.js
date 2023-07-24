import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormComponent from './Test'
import ProductDetails from './Product';
import FetchingData from './FetchingData';
import PostingApi from './PostingApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <FormComponent/> */}
     {/* <FetchingData/>
     <ProductDetails/> */}
     {/* <PostingApi/> */}
     <FetchingData/>
  </React.StrictMode>
);

