import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Text>{t('home.calendar')}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
