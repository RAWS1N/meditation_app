import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AppGradient,GuidedAffirmationsGallery } from '@/components'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary'

const Affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#2e1f58','#54426b','#a790af']} style='py-10'>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text className='text-zinc-50 text-3xl font-bold'>Change your beliefs with affirmations</Text>
            <View>
                {AFFIRMATION_GALLERY.map(gallery => (
                    <GuidedAffirmationsGallery key={gallery.title} title={gallery.title} previews={gallery.data}/>
                ))}
            </View>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

export default Affirmations