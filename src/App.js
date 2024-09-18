import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LilithMeaning from './components/LilithMeaning';
import LilithCalculator from './components/LilithCalculator';


function App() {
  return (
    <div className="App">
      <div className="container my-4">
        <section>
          <LilithMeaning />
        </section>
        <section className="mt-5">
          <h2 className="text-center mb-4">Lilith En Los Signos </h2>
          <LilithCalculator />
        </section>
      </div>
    </div>
  );
}

export default App;
