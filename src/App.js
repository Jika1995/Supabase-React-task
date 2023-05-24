import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
