import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import VehicleTypeSelector from '../dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [agentInfo, setAgentInfo] = useState({ name: '', matricule: '' });

  const handleLogin = () => {
    // Simuler une connexion réussie
    setAgentInfo({
      name: 'Jean Dupont',
      matricule: 'AG-2023-456'
    });
    setIsAuthenticated(true);
    Alert.alert('Connexion réussie', `Bienvenue ${agentInfo.name}`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAgentInfo({ name: '', matricule: '' });
  };

  const handleTransactionSubmit = (data: { type: 'moto' | 'vehicle'; plateNumber: string; amount: number }) => {
    console.log('Transaction soumise:', {
      ...data,
      agent: agentInfo.matricule,
      date: new Date().toISOString()
    });
    
    Alert.alert(
      'Succès', 
      `Transaction enregistrée:\n\n` +
      `Type: ${data.type}\n` +
      `Plaque: ${data.plateNumber}\n` +
      `Montant: ${data.amount} FC\n` +
      `Agent: ${agentInfo.matricule}`
    );
  };

  if (!isAuthenticated) {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.title}>Connexion Agent</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Agent: {agentInfo.name}</Text>
        <Text style={styles.welcomeText}>Matricule: {agentInfo.matricule}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      <VehicleTypeSelector onTransactionSubmit={handleTransactionSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutText: {
    color: 'red',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;