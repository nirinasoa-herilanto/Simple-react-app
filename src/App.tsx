import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, Error, AboutPage } from '@project/pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
