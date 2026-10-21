import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function Pagina2() {
  const router = useRouter();
  return (
    <Box className='flex-1 justify-center items-center'>
      <Text className='uppercase font-extrabold'>Itens que eu gostei</Text>
    </Box>
  );
}
