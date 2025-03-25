import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur le tableau de bord</Text>
      <Image source={{uri : 'https://cdn.dribbble.com/userupload/6821433/file/original-02e74872ed581931ed14afbd4d82533d.png?resize=1024x768&vertical=center'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
