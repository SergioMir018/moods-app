import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import OptionsHeaderText from '@/components/settings/OptionsHeaderText';
import ViewHeader from '@/components/common/ViewHeader';

export default function ThemeSelectorView() {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <ViewHeader>{t('settingsview.sections.themes.main')}</ViewHeader>
      <OptionsHeaderText>
        {t('settingsview.sections.themes.header')}
      </OptionsHeaderText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
