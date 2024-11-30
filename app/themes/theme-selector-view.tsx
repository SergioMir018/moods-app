import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import OptionsHeaderText from '@/components/settings/OptionsHeaderText';
import ViewHeader from '@/components/common/ViewHeader';
import ColorOption from '@/components/settings/themes/ColorOption';
import { Colors } from '@/constants/Colors';

export default function ThemeSelectorView() {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <ViewHeader>{t('settingsview.sections.themes.main')}</ViewHeader>
      <OptionsHeaderText>
        {t('settingsview.sections.themes.header')}
      </OptionsHeaderText>
      <View style={styles.colorOptionContainer}>
        {Object.keys(Colors).map((color) => {
          const typedColor = color as keyof typeof Colors;

          return (
            <ColorOption
              key={color}
              color={typedColor}
            >
              {t(`settingsview.sections.themes.colors.${color}`)}
            </ColorOption>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  colorOptionContainer: {
    marginTop: 10,
    gap: 15
  }
});
