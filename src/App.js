import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MasterLayout from './navigation/MasterLayout';

function App() {
  return (
    <BrowserRouter>
      <MasterLayout />
    </BrowserRouter>
  );
}

export default App;
