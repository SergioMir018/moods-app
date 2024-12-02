import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionHeaderText from '@/components/common/SectionHeaderText';
import { useTranslation } from 'react-i18next';
import LinkedSection from '@/components/settings/LinkedSection';
import Octicons from '@expo/vector-icons/Octicons';
import { useTheme } from '@/components/common/ThemeContext';

export default function settings() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <SectionHeaderText>{t('settingsview.settings')}</SectionHeaderText>
      <LinkedSection to='/themes/theme-selector-view'>
        <View style={styles.container}>
          <Octicons
            name='paintbrush'
            size={24}
            color='white'
          />
          <View>
            <Text style={styles.sectionMainText}>
              {t('settingsview.sections.themes.main')}
            </Text>
            <Text style={styles.sectionSubText}>
              {t('settingsview.sections.themes.subtext')}
            </Text>
          </View>
        </View>
      </LinkedSection>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  sectionMainText: {
    fontSize: 24,
    fontFamily: 'Outfit',
    color: 'white'
  },
  sectionSubText: {
    fontSize: 15,
    fontFamily: 'OutfitLight',
    color: 'white'
  },
});
