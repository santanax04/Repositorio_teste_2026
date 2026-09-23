import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <Tabs
        initialRouteName="Pagina1"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#06b6d4', // Cyan neon
          tabBarInactiveTintColor: '#64748b',
          tabBarStyle: {
            backgroundColor: '#030712', // Dark background
            borderTopColor: '#1e1b4b',
            height: 62,
            paddingBottom: 8,
            paddingTop: 6,
          },
        }}
      >
        <Tabs.Screen
          name="Pagina1"
          options={{
            title: 'Pesquisa',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'book' : 'book-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Pagina2"
          options={{
            title: 'Salvos',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'bookmark' : 'bookmark-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Pagina3"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen name="index" options={{ href: null }} />
      </Tabs>
    </GluestackUIProvider>
  );
}