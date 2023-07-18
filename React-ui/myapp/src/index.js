import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from './StarRating';
import StarRating2 from './StarRating2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <ColorChanging/> */}
   <StarRating/>
   <StarRating2/>
    
  </React.StrictMode>
);

