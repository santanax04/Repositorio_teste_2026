import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {useRouter} from "expo-router";


export default function Pagina3() {
  const router = useRouter();
  return (
      <View>
        <Text className="uppercase font-extrabold">Página 3</Text>
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