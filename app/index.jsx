import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View>
        <Text>Página Home</Text>
        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Primeiro Página</ButtonText>
        </Button>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Segundo Página</ButtonText>
        </Button>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Terceira Página</ButtonText>
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