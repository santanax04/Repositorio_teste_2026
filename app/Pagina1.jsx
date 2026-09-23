import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {useRouter} from "expo-router";
import { Box } from '@/components/ui/box';

export default function Pagina1() {
  const router = useRouter();
  return (
      <Box>
        <Text className="uppercase font-extrabold">Página 1</Text>
      </Box>
  );
}