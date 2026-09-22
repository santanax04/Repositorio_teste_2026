import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import {Link} from "expo-router";


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View>
        <Text className="uppercase font-extrabold">Página Home</Text>
        <Divider className="my-3 w-52"/>
        <Link href="/Pagina1">
        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold text-white'>Primeiro Página</ButtonText>
        </Button>
        </Link>
        <Divider className="my-3 w-20"/>

        <Button className='bg-indigo-600'>
          <ButtonText className='font-bold text-white'>Segundo Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

        <Button className='bg-slate-800'>
          <ButtonText className='font-bold text-white'>Terceira Página</ButtonText>
        </Button>
        <Divider className="my-3 w-52"/>
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