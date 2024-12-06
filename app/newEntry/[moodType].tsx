import ThemedSafeArea from '@/components/common/ThemedSafeArea';
import ViewHeader from '@/components/common/ViewHeader';
import faceIcons from '@/constants/FaceIcons';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function NewEntrieView() {
  const params = useLocalSearchParams();
  const moodType = Number(params.moodType)

  return (
    <ThemedSafeArea>
      <ViewHeader>{faceIcons[moodType].icon(30)}</ViewHeader>
      <View>
        <Text>New Entrie View</Text>
      </View>
    </ThemedSafeArea>
  );
}
