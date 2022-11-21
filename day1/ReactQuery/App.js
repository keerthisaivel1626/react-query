import React from 'react';
import {QueryClientProvider,QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import RootNavigation from './app/navigation/RootNavigation';
const App = () => {
  const queryClient=new QueryClient()
 
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
     
    </QueryClientProvider>
  );
};

export default App;
