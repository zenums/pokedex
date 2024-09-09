import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Column from '@/components/Column';
import ThemedText from '@/components/ThemedText';
import globalStyles from '@/utils/styles';


const images: Record<string, any> = {
  'twoCharacter.png': require('@/assets/images/Onboarding/twoCharacter.png'),
  'womenCharacter.png': require('@/assets/images/Onboarding/womenCharacter.png'),
  'twoCharacter_login.png': require('@/assets/images/Onboarding/twoCharacter_login.png'),
};

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Content({ title, text, image }: Props) {
  return (
    <Column
      verticalPosition="flex-end"
      horizontalPosition="center"
      style={styles.column}
    >
      <Image
        source={images[image]}
        style={styles.image}
        resizeMode="contain"
      />
      <ThemedText variant="headline" color="black" style={globalStyles.text}>
        {title}
      </ThemedText>
      <ThemedText variant="text" color={600} style={globalStyles.text}>
        {text}
      </ThemedText>
    </Column>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 320,
    height: 320,
  },
});
