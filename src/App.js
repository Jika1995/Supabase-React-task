import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { store } from './store/store';

function App() {

  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Navbar />
        <MainRoutes />
      </Provider>
    </AuthContextProvider>
  );
}

export default App;
