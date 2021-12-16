import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          ...FontAwesome.font,
          // eslint-disable-next-line global-require
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
