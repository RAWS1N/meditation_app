import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'

interface AppGradientProps {
    children : React.ReactNode
    colors : string[],
    style? : string
}

const AppGradient:React.FC<AppGradientProps> = ({children,colors,style}) => {
  return (
    <LinearGradient className={`flex-1 ${style}`} colors={colors}>
        <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient