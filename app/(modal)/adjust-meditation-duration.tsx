import { View, Text } from 'react-native'
import React from 'react'
import { AppGradient, BackButton, CustomButton } from '@/components'
import { useRouter } from 'expo-router'
import { useTimerContext } from '@/context/TimerContext'

const AdjustMeditaionDuration = () => {
    const router = useRouter()
    const {setDuration} = useTimerContext()
    const handlePress = (duration : number) => {
        setDuration(duration)
        router.back()
    }
  return (
    <View className='flex-1 relative'>
        <AppGradient style='py-12' colors={['#161b2e','#0a4d4a','#766e67']}>
            <BackButton/>
            <View className='justify-center h-4/5'>
                <Text className='text-center font-bold text-3xl text-white py-4'>Adjust meditation duration</Text>
            <View>
                <CustomButton title='10 seconds' onPress={() => handlePress(10)} containerStyle='mb-5'/>
                <CustomButton title='5 Minutes' onPress={() => handlePress(5*60)} containerStyle='mb-5'/>
                <CustomButton title='10 Minutes' onPress={() => handlePress(10*60)} containerStyle='mb-5'/>
                <CustomButton title='15 Minutes' onPress={() => handlePress(15*60)} containerStyle='mb-5'/>
            </View>
            </View>
        </AppGradient>
    </View>
  )
}

export default AdjustMeditaionDuration