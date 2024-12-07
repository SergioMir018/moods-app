import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import OptionsHeaderText from '@/components/settings/OptionsHeaderText';
import ViewHeader from '@/components/common/ViewHeader';
import ColorOption from '@/components/settings/themes/ColorOption';
import { Theme } from '@/constants/Colors';
import ThemedSafeArea from '@/components/common/ThemedSafeArea';

export default function ThemeSelectorView() {
  const { t } = useTranslation();

  return (
    <ThemedSafeArea>
      <ViewHeader>
        <Text style={styles.text}>
          {t('settingsView.sections.themes.main')}
        </Text>
      </ViewHeader>
      <OptionsHeaderText>
        {t('settingsView.sections.themes.header')}
      </OptionsHeaderText>
      <View style={styles.colorOptionContainer}>
        {Object.keys(Theme).map((color) => {
          const typedColor = color as keyof typeof Theme;

          return (
            <ColorOption
              key={color}
              color={typedColor}
            >
              {t(`settingsView.sections.themes.colors.${color}`)}
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
    gap: 15,
  },
  text: {
    position: 'absolute',
    fontSize: 20,
    fontFamily: 'Outfit',
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
});
