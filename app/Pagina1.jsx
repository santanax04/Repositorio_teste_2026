import { Text } from 'react-native';
import {useRouter} from "expo-router";
import { Box } from '@/components/ui/box';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagina1() {
  const router = useRouter();
  return (
      <Box className="flex-1 justify-center items-center">
        <Text className="uppercase font-extrabold">Página 1</Text>
      </Box>
  );
}