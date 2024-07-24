import { SafeAreaView } from 'react-native'
import React from 'react'


interface ContentProps {
    children : React.ReactNode
}

const Content:React.FC<ContentProps> = ({children}) => {
  return (
    <SafeAreaView className='flex-1 px-5 py-3'>
        {children}
    </SafeAreaView>
  )
}

export default Content