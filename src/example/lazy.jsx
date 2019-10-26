import React, {lazy, Suspense} from 'react';
import './App.css';

const About = lazy(() => import(/*.webpackChunkName:."about".*/'./about.jsx'))

function App() {

  return (
    <div>
      <Suspense fallback={<div>loading</div>}> 
      <About/>
      </Suspense>
    </div>
  );
}

export default App;
