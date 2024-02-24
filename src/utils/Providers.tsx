import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { MenuProvider } from 'react-native-popup-menu';
import { NativeBaseProvider } from 'native-base';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

type Props = {
  children: JSX.Element
}

export default function Providers({ children }: Props) {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <MenuProvider>
            <SafeAreaProvider>
              <NativeBaseProvider>
                {children}
              </NativeBaseProvider>
            </SafeAreaProvider>
          </MenuProvider>
        </ToastProvider>
      </PersistGate>
    </StoreProvider>
  )
}