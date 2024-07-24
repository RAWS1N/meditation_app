import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'


const BackButton = () => {
    const router = useRouter()
  return (
    <Pressable onPress={() => router.back()} className='absolute top-0 left-6 z-10'>
        <View className='flex flex-row items-center  gap-2'>
            <AntDesign name="leftcircleo" size={28} color="white" className=''/>
            <Text className='text-white text-lg uppercase pb-1 font-light'>Back</Text>
        </View>
    </Pressable>
  )
}

export default BackButton