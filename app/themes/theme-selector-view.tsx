import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import OptionsHeaderText from '@/components/settings/OptionsHeaderText';
import ViewHeader from '@/components/common/ViewHeader';
import ColorOption from '@/components/settings/themes/ColorOption';
import { Colors } from '@/constants/Colors';
import ThemedSafeArea from '@/components/common/ThemedSafeArea';

export default function ThemeSelectorView() {
  const { t } = useTranslation();

  return (
    <ThemedSafeArea>
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
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({
  colorOptionContainer: {
    marginTop: 10,
    gap: 15
  }
});
