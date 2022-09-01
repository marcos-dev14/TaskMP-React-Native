import 'react-native-gesture-handler';

import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  DancingScript_400Regular,
  DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';

import { theme } from './src/styles/theme';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_700Bold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar  
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

