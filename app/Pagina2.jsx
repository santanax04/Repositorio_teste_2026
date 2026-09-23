import { Text } from 'react-native';
import { Box } from '@/components/ui/box';
import {useRouter} from "expo-router";


export default function Pagina2() {
  const router = useRouter();
  return (
     <Box className="flex-1 justify-center items-center">
        <Text className="uppercase font-extrabold">Página 2</Text>
      </Box>
  );
}