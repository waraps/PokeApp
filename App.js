import React, {useState, useEffect} from 'react'
// import * as Font from 'expo-font';
import Router from './app/routes/Router'

// import ActivityIndicatorApp from './app/components/ActivityIndicatorApp'

export default function App() {

  // const [loaded, setLoaded] = useState(true)
  // useEffect(() => {
  //   loadFonts()
  // }, [])

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     'ValeriaRound-Regular': require('./app/assets/font/VarelaRound-Regular.ttf')
  //   })
  //   setLoaded(false)
  // }

  // if (!loaded) {
    return <Router />
  // }
  // return <ActivityIndicatorApp />
  
}