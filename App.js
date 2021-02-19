import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AuthUserProvider from './src/nav/AuthUserProvider';
import Routes from './src/nav/Routes';

export default function App() {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
}

