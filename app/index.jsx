import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View>
        <Text>Página Home</Text>
        <Divider className="my-3 w-52"/>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Primeiro Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Segundo Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold'>Terceira Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>
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