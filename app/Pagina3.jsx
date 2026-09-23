import { Image, Text, ScrollView, View } from 'react-native';
import { meuPerfil } from '../data/studyData';

export default function Pagina3() {
  return (
    <ScrollView className="flex-1 bg-slate-950 p-4">
      <View className="mt-8 mb-6">
        
        {/* Foto e Nome */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: meuPerfil.foto }}
            className="w-20 h-20 rounded-full border-2 border-cyan-400 mb-2"
          />
          <Text className="text-white font-bold text-lg">{meuPerfil.nome}</Text>
          <Text className="text-slate-400 text-xs">{meuPerfil.curso}</Text>
        </View>

        {/* Quadros de Progresso */}
        <Text className="text-slate-300 font-semibold text-sm mb-3">Meu Progresso</Text>
        
        <View className="flex-row gap-3">
          <View className="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <Text className="text-white font-bold text-xl">{meuPerfil.lidos}</Text>
            <Text className="text-slate-400 text-xs mt-1">Artigos Lidos</Text>
          </View>

          <View className="flex-1 bg-slate-900 p-4 rounded-xl border border-slate-800">
            <Text className="text-cyan-400 font-bold text-xl">{meuPerfil.horas}h</Text>
            <Text className="text-slate-400 text-xs mt-1">Horas de Estudo</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}