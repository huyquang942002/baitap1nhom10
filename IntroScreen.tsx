import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IntroScreenProps {
  navigation: any;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Sau 10 giây, chuyển đến màn hình Home
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>
        Giới thiệu bản thân trong 10 giây...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;