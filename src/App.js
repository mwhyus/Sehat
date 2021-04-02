import React from 'react'
import { StyleSheet } from 'react-native'
import { Login, Register, Splash } from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <Login />
      <Register />
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
