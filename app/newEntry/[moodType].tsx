import SaveButton from '@/components/common/SaveButton';
import SectionHeaderText from '@/components/common/SectionHeaderText';
import ThemedSafeArea from '@/components/common/ThemedSafeArea';
import ViewHeader from '@/components/common/ViewHeader';
import faceIcons from '@/constants/FaceIcons';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

export default function NewEntrieView() {
  const { t } = useTranslation();
  const params = useLocalSearchParams();
  const moodType = Number(params.moodType);

  return (
    <ThemedSafeArea>
      <ViewHeader>
        <View style={styles.centeredIconContainer}>
          {faceIcons[moodType].icon(30)}
        </View>
        <View style={styles.viewHeaderContent}>
          <SaveButton />
        </View>
      </ViewHeader>
      <View>
        <SectionHeaderText>{t('newEntryView.howAreYour')}</SectionHeaderText>
      </View>
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({
  centeredIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeaderContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
