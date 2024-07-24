import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams} from 'expo-router'
import { GalleryPreviewData } from '@/components/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary'
import { AppGradient, BackButton } from '@/components'
import { ScrollView } from 'react-native-gesture-handler'

const AffirmationPractice = () => {
    const {itemId} = useLocalSearchParams()
    const [selectedItem,setSelectedItem] = useState<GalleryPreviewData>()
    const [affirmationText,setAffirmationText] = useState<string[]>([])

    useEffect(() => {
        for(let idx= 0 ; idx < AFFIRMATION_GALLERY.length;idx++){
            const affirmationData = AFFIRMATION_GALLERY[idx].data
            const affirmationToStart = affirmationData.find(value => value.id === Number(itemId))
            if(affirmationToStart){
                setSelectedItem(affirmationToStart)
                const affirmationsArray = affirmationToStart.text.split('.')
                if(affirmationsArray.at(-1) === ''){
                    affirmationsArray.pop()
                }
                setAffirmationText(affirmationsArray)
            }
        }
    },[])
  return (
    <View className='flex-1'>
      <ImageBackground source={selectedItem?.image} resizeMode='cover' className='flex-1'>
        <AppGradient colors={['rgba(0,0,0,0.3)','rgba(0,0,0,0.9)']} style='py-12'>
            <BackButton/>
            <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                <View className='h-full justify-center'>
                    <View className='h-4/5 justify-center'>
                    {affirmationText?.map((item,idx) => (
                        <Text key={idx} className='text-white text-3xl mb-12 font-bold text-center'>{item}.</Text>
                    ))}
                    </View>
                </View>
            </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice