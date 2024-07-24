import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from './models/AffirmationCategory'
import { Link } from 'expo-router'


interface GuidedAffirmationsGalleryProps {
    title : string
    previews : GalleryPreviewData[]
}

const GuidedAffirmationsGallery:React.FC<GuidedAffirmationsGalleryProps> = ({title,previews}) => {
  return (
    <View className='my-5'>
        <View className='mb-2'>
            <Text className='font-bold text-xl text-white'>{title}</Text>
        </View>
        <View className='space-y-2'>
            <FlatList 
                data={previews}
                showsHorizontalScrollIndicator = {false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <Link href={`/affirmations/${item.id}`} asChild={true}>
                        <Pressable>
                            <View className='h-36 w-32 rounded-md mr-4'>
                                <Image source={item.image} resizeMode='cover' className='w-full h-full'/>
                            </View>
                        </Pressable>
                    </Link>
                )}
                horizontal={true}
            />
        </View>
    </View>
  )
}

export default GuidedAffirmationsGallery