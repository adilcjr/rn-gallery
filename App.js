import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator';

import firebaseKeys from './src/config/firebaseKeys'

import * as firebase from 'firebase'

export default function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseKeys);
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}