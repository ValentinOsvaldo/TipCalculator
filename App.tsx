import React from 'react';
import { TipProvider } from './src/context';
import { TipScreen } from './src/screens';

const App = () => {
  return (
    <TipProvider>
      <TipScreen />
    </TipProvider>
  );
};

export default App;
