import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollComponent from './Infidata';
// import Apper from './Newinfi';
import InfiniteScroll from './Infidata'
import Infidata_ from './Infidata'
import InfiniteScrollnew from './Newinfi'
import Newscroll from './newscroll'
import Scroller from './scroller'
import Datas  from './scroller';
import DataScroll from './newscroll'
import ToggleElement from './Toggle'

ReactDOM.render(
  <React.StrictMode>
    <Datas/>,
    {/* <ToggleElement/> */}
     {/* <App /> */}
    {/* <Newscroll/>
     
{/* <Infidata_/> */}
   {/* <InfiniteScroll/>   */}
      {/* <ScrollComponent/> ,
      <InfiniteScrollnew/>, */}
       {/* <Test/> */}
     
     {/* <Apper/> */}
     {/* <Scroller/> */}
 
     {/* <DataScroll/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
