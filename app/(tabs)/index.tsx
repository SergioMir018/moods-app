import { StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import ThemedSafeArea from '@/components/common/ThemedSafeArea';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ThemedSafeArea>
      <Text>{t('homeview.calendar')}</Text>
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({
  
});
