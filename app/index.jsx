import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text>Página com Expo Router</Text>
        <Button className='bg-fuchsia-600'>
          <ButtonText className='color-white font-bold'>Primeiro Botão</ButtonText>
        </Button>
      </View>
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