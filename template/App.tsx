import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import Root from './lib/screens/root';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}
export default App;
