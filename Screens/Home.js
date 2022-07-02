import { View,Text } from 'native-base'
import React from 'react'
import { Styles } from '../Components/Styles'

export default function Home() {
  return (
    <View>
      <View style={Styles.container}>
        <Text style={Styles.text}>
          All
        </Text>
      </View>
      <View style={Styles.flex}>
        <Text>Title</Text>
        <Text>Date</Text>
      </View>
    </View>
  )
}
