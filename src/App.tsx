import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, Error } from '@project/pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
