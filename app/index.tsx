import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
//@ts-ignore
import beachImage from '@/assets/meditation-images/beach.webp'
import {LinearGradient} from 'expo-linear-gradient'
import {StatusBar} from 'expo-status-bar'
import { CustomButton,AppGradient } from '@/components'
import { useRouter } from 'expo-router'

const App = () => {
  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
      <AppGradient  colors={['rgba(0,0,0,0.4)','rgba(0,0,0,0.8)']}>
        <SafeAreaView className='flex-1 justify-between px-1 py-4'>
            <View>
              <Text className='text-center font-bold text-white text-4xl'>Simple Meditation</Text>
              <Text className='text-center font-bold text-white text-md'>Simplifying Meditation for everyone</Text>
            </View>
            <View>
              <CustomButton onPress={() => router.push('/nature-meditate')} title='Get Started'/>
            </View>
            <StatusBar style='light'/>
        </SafeAreaView>
      </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default App