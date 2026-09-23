import { Image, Text, ScrollView, View } from 'react-native';
import { pesquisasSalvas } from '../data/studyData';

export default function Pagina2() {
  return (
    <ScrollView className="flex-1 bg-slate-950 p-4">
      <View className="mt-8 mb-6">
        <Text className="text-white text-xl font-bold mb-4">Artigos Salvos</Text>

        {/* Lista simples feita com map */}
        <View className="gap-4">
          {pesquisasSalvas.map((item) => (
            <View key={item.id} className="bg-slate-900 p-3 rounded-xl flex-row items-center">
              <Image
                source={{ uri: item.capa }}
                className="w-16 h-16 rounded-lg"
              />
              <View className="ml-3 flex-1">
                <Text className="text-cyan-400 text-xs font-semibold">{item.materia}</Text>
                <Text className="text-white font-bold text-sm mt-0.5">{item.titulo}</Text>
                <Text className="text-slate-500 text-[11px] mt-1">{item.data}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}