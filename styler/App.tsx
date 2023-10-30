import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}