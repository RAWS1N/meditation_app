import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress : () => void
    title : string
    textStyle ? : string
    containerStyle? : string
}

const CustomButton:React.FC<CustomButtonProps> = ({title,onPress,textStyle,containerStyle}) => {
  return (
    <TouchableOpacity 
        activeOpacity={0.7} 
        className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`} 
        onPress={onPress}
    >
      <Text className={`text-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton