import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Link } from "expo-router";


export default function App() {
  return (
      <View>
        <Text className="uppercase font-extrabold">Página Home</Text>
        <Divider className="my-3 w-52"/>

        <Link href="/Pagina1" asChild>
        <Button className='bg-fuchsia-300'>
          <ButtonText className='font-bold text-white'>Primeiro Página</ButtonText>
        </Button>
        </Link>
        <Divider className="my-3 w-20"/>

        <Link href="/Pagina2" asChild>
        <Button className='bg-indigo-600'>
          <ButtonText className='font-bold text-white'>Segundo Página</ButtonText>
        </Button>
        </Link>
        <Divider className="my-3 w-20"/>

        <Link href="/Pagina3" asChild>
          <Button className='bg-slate-800'>
            <ButtonText className='font-bold text-white'>Terceira Página</ButtonText>
          </Button>
        </Link>
        <Divider className="my-3 w-52"/>
      </View>
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