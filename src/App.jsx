import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Home from './pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
