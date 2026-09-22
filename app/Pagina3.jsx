import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import {useRouter} from "expo-router";


export default function Pagina3() {
  const router = useRouter();
  return (
    
    <GluestackUIProvider mode="dark">
      <View>
        <Text className="uppercase font-extrabold">Página 3</Text>
        <Divider className="my-3 w-52"/>

        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold text-white'>Primeiro Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

        <Button className='bg-indigo-600'>
          <ButtonText className='font-bold text-white'>Segundo Página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

        <Button className='bg-slate-800' onPress={()=> router.back()}>
          <ButtonText className='font-bold text-white'>Home</ButtonText>
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