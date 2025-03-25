// WelcomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Utilisez useRouter pour la navigation

const WelcomeScreen = () => {
  const router = useRouter();

  const GotoLogin = () => {
    router.navigate('/naviagte/login'); // Utilisez router.push pour naviguer vers l'écran de connexion
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj2w9rhJqFfBV3HCuT98b0kvqPy-JRl3rJNgfqeNofMxFQKqFxbqzk1O2D8mCziX8onU&usqp=CAU' }} // Remplacez par l'URL de votre image
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenue sur Taxa App</Text>
      <Text style={styles.description}>
        Découvrez nos produits et services. Nous sommes là pour vous aider à atteindre vos objectifs.
      </Text>
      <Button title="Let's go" onPress={GotoLogin} /> {/* Appel de la fonction de navigation */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;