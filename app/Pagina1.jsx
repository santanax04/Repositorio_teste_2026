import { Image, Text, ScrollView, View } from 'react-native';
import { artigoPrincipal } from '../data/studyData';

export default function Pagina1() {
  return (
    <ScrollView className="flex-1 bg-slate-950 p-4">
      <View className="mt-8 mb-6">
        
        {/* Imagem simples com bordas arredondadas */}
        <Image
          source={{ uri: artigoPrincipal.imagem }}
          className="w-full h-52 rounded-2xl mb-4"
          resizeMode="cover"
        />

        {/* Informações do Artigo */}
        <Text className="text-cyan-400 font-bold text-xs uppercase tracking-wide">
          {artigoPrincipal.categoria} • {artigoPrincipal.tempoLeitura}
        </Text>
        
        <Text className="text-white text-2xl font-bold mt-1 mb-1">
          {artigoPrincipal.titulo}
        </Text>
        
        <Text className="text-slate-400 text-sm mb-4">
          {artigoPrincipal.subtitulo}
        </Text>

        {/* Texto do resumo */}
        <Text className="text-slate-300 text-sm leading-relaxed mb-6">
          {artigoPrincipal.resumo}
        </Text>

        {/* Caixa de anotação simples */}
        <View className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <Text className="text-cyan-400 font-bold text-xs mb-1">Minha Anotação:</Text>
          <Text className="text-slate-300 text-xs">
            Revisar a parte sobre a dobra do espaço-tempo para a prova de física da semana que vem.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}