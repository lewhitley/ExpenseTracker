import React from 'react';
import HomeContainer from './home/home_container';

const App = ({ children }) => (
  <div>
    <HomeContainer />
    <main>
      {children}
    </main>
  </div>
);

export default App;
