import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <SafeAreaView className="flex-1 bg-white">
        <Tabs initialRouteName="Pagina1" screenOptions={{ headerShown: false }}>
          <Tabs.Screen name="Pagina1" options={{ title: "Home", tabBarIcon: ({color, size})=>(
            <Ionicons name="home" color={color} size={size} />
          )}} />

          <Tabs.Screen name="Pagina2" options={{title: "Gostei", tabBarIcon: ({color, size})=>(
            <Ionicons name="heart" color={color} size={size} />
          )
          }} />

          <Tabs.Screen name="Pagina3" options={{title: "Perfil", tabBarIcon: ({color, size})=>(
            <Ionicons name="person" color={color} size={size} />
          )
          }} />

          <Tabs.Screen name="index" options={{ href: null }} />
        </Tabs>
      </SafeAreaView>
    </GluestackUIProvider>

  );
}