import React from "react";
import "./App.css";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EntryName from "./EntryName";
import Screen_2 from "./Screen_2";
import Layout from "./layout";

function App() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
   
}
  return (
    <div className="App">
      <div className="body">
        {/* <EntryName childToParent={childToParent}/> */}
        {data}
      <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<EntryName childToParent={childToParent}/>} />
       <Route path="Screen_2" element={<Screen_2 />} />
     </Route>
   </Routes>
      
      </div>
    
     
   </div>

    // <div className="App">
    //   <div className="body">
    //     <div className='details'>
    //       <EntryName/>
    //     </div>

    //   </div>
    //   {/* <div>
    //     <Screen_2/>
    //   </div> */}
    // </div>
  );
}

export default App;
