import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import {Link, Stack, Tabs} from "expo-router";


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <Tabs>
        <Tabs.screen name="Pagina1"/>
        <Tabs.screen name="Pagina2"/>
        <Tabs.screen name="Pagina3"/>
      </Tabs>
    </GluestackUIProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});