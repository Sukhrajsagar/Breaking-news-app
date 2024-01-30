import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const apikey = "25f676bdc40a4070a8ea6b44884b4099"
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
      <LoadingBar
        height={4}
        color='red'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress = {setProgress} apikey={apikey} key="general" country="in" category="general"/>}>
          </Route>
          <Route path="business" element={<News setProgress = {setProgress} apikey={apikey} key="business" country="in" category="business"/>}>
          </Route>
          <Route path="entertainment" element={<News setProgress = {setProgress} apikey={apikey} key="entertainment" country="in" category="entertainment"/>}> 
          </Route>
          <Route path="health" element={<News setProgress = {setProgress} apikey={apikey} key="health" country="in" category="health"/>}>
          </Route>
          <Route path="science" element={<News setProgress = {setProgress} apikey={apikey} key="science" country="in" category="science"/>}>
          </Route>
          <Route path="sports" element={<News setProgress = {setProgress} apikey={apikey} key="sports" country="in" category="sports"/>}>
          </Route>
          <Route path="technology" element={<News setProgress = {setProgress} apikey={apikey} key="techonology" country="in" category="technology"/>}>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;
