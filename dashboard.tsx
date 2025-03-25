import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

type VehicleType = 'moto' | 'vehicle';

interface TransactionData {
  type: VehicleType;
  plateNumber: string;
  amount: number;
}

interface VehicleTypeSelectorProps {
  onTransactionSubmit: (data: TransactionData) => void;
}

const VehicleTypeSelector: React.FC<VehicleTypeSelectorProps> = ({ onTransactionSubmit }) => {
  const [selectedType, setSelectedType] = useState<VehicleType | null>(null);
  const [plateNumber, setPlateNumber] = useState<string>('');

  const handleSubmit = () => {
    if (!selectedType || !plateNumber) {
      Alert.alert('Erreur', 'Veuillez sélectionner un type et entrer le numéro de plaque');
      return;
    }
    
    const amount = selectedType === 'moto' ? 500 : 1000;
    onTransactionSubmit({
      type: selectedType,
      plateNumber,
      amount
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type de véhicule</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, selectedType === 'moto' && styles.selectedButton]}
          onPress={() => setSelectedType('moto')}
        >
          <Text style={styles.buttonText}>Moto (500 FC)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, selectedType === 'vehicle' && styles.selectedButton]}
          onPress={() => setSelectedType('vehicle')}
        >
          <Text style={styles.buttonText}>Véhicule (1000 FC)</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Numéro de plaque"
        value={plateNumber}
        onChangeText={setPlateNumber}
        autoCapitalize="characters"
      />
      
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={!selectedType || !plateNumber}
      >
        <Text style={styles.submitButtonText}>Valider Paiement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : "center",
    padding : 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    marginHorizontal : 10
  },
  selectedButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VehicleTypeSelector;