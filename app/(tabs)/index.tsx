import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ThemedSafeArea from '@/components/common/ThemedSafeArea';
import Container from '@/components/common/Container';
import faceIcons from '@/constants/FaceIcons';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ThemedSafeArea>
      <Container customStyles={styles.newEntrieContainer}>
        <Text style={styles.text}>{t('homeview.newEntrie')}</Text>
        <View style={styles.faceContainer}>
          {faceIcons.map(({ name, icon }) => {
            return (
              <TouchableOpacity 
                key={name}
                touchSoundDisabled
                activeOpacity={1}
                style={[styles.face]}
              >
                {icon}
              </TouchableOpacity>
            );
          })}
        </View>
      </Container>
    </ThemedSafeArea>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: "OutfitSemibold",
    fontSize: 20,
  },
  newEntrieContainer: {
    marginTop: 10
  },
  faceContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    gap: 10,
  },
  face: {
      borderRadius: 50,
  }
});
