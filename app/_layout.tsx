import {SplashScreen, Stack} from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import TimerProvider from '@/context/TimerContext';

SplashScreen.preventAutoHideAsync()


export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if(error) throw error
        if(fontsLoaded) SplashScreen.hideAsync()
    },[fontsLoaded,error])

    if(!fontsLoaded) return null
    if(!fontsLoaded && !error) return null

    return (
        <TimerProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack>
                    <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
                    <Stack.Screen name='index' options={{headerShown:false}}/>
                    <Stack.Screen name='meditate/[id]' options={{headerShown:false}}/>
                    <Stack.Screen name='(modal)/adjust-meditation-duration' options={{headerShown:false,presentation  : 'modal'}}/>
                </Stack>
            </GestureHandlerRootView>
        </TimerProvider>
    )
}