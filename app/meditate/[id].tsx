import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { AppGradient, BackButton, CustomButton } from '@/components'
import { useLocalSearchParams, useRouter } from 'expo-router'
import {Audio} from 'expo-av'
import { MEDITATION_DATA,AUDIO_FILES } from '@/constants/meditation-data'
import { useTimerContext } from '@/context/TimerContext'

const Meditate = () => {
  const {id} = useLocalSearchParams()
  const {duration:secondsRemaining,setDuration} = useTimerContext()
  const [isMeditating,setMeditating] = useState(false)
  const [audioSound,setSound] = useState<Audio.Sound>()
  const [isPlayingAudio,setIsPlayingAudio] = useState<boolean>(false)

  const router = useRouter()
  useEffect(() => {
    let timerId : NodeJS.Timeout
    if(secondsRemaining === 0){
      setMeditating(false)
      if(isPlayingAudio) audioSound?.pauseAsync()
        setMeditating(false)
        setIsPlayingAudio(false)
      return 
    }
    if(isMeditating){
      timerId = setTimeout(() => setDuration(prevState => prevState-1),1000)
    }
    return () => {
      clearTimeout(timerId)
    }
  },[secondsRemaining,isMeditating])

  useEffect(() => {
    return () => {
      setDuration(10)
      audioSound?.unloadAsync()
    }
  },[audioSound])


  const toggleMeditationSessionStatus = async() => {
    if(secondsRemaining === 0) setDuration(10)
      setMeditating(prevState => !prevState)
    await toggleSound()
  }

  const toggleSound = async(force? : boolean) => {
    const sound = audioSound ? audioSound : await initializeSound()
    const status = await sound?.getStatusAsync()
    if(status.isLoaded){
    if(!isPlayingAudio){
      await sound.playAsync()
      setIsPlayingAudio(true)
    }else {
      await sound.pauseAsync()
      setIsPlayingAudio(false)
    }
    if(force){
      await sound.pauseAsync()
      setIsPlayingAudio(false)
    }
  }
  }
  
  const initializeSound = async() => {
    const audioFileName = MEDITATION_DATA[Number(id)-1].audio
    const {sound} = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName])
    setSound(sound)
    return sound
  }


  const handleAdjustDuration = async() => {
      setMeditating(false)
      await toggleSound(true)
      router.push('(modal)/adjust-meditation-duration')
  }
  

  const formattedTimeMinutes = String(Math.floor(secondsRemaining/60)).padStart(2,'0')
  const formattedTimeSeconds = String(secondsRemaining%60).padStart(2,'0')

  return (
    <View className='flex-1'>
      <ImageBackground source={MEDITATION_IMAGES[Number(id)-1]} resizeMode='cover' className='flex-1'>
        <AppGradient style='py-12' colors={['transparent','rgba(0,0,0,0.8)']}>
            <BackButton/>
            <View className='flex-1 justify-center'>
                <View className='mx-auto z-10 bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
                  <Text className='text-4xl text-blue-800 font-rmono'>{formattedTimeMinutes}:{formattedTimeSeconds}</Text>
                </View>
            </View>
            <View className='mb-5'>
              <CustomButton title="Adjust Duration" onPress={handleAdjustDuration} />
              <CustomButton title={`${isMeditating ? 'Stop' : 'Start'} Meditation`} onPress={toggleMeditationSessionStatus} containerStyle='mt-4'/>
            </View>
         </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate