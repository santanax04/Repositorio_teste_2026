import { Text } from 'react-native';
import { useReuter } from 'expo';
import { Box } from '@/components/ui/box';

export default function Pagina1() {
  const router = useReuter();
  return (
    <Box className='flex-1 justify-center items-center'>
      <Text className='uppercase font-extrabold'>Pagina 1</Text>
    </Box>
  );
}