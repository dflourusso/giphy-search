import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default App
