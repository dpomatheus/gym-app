import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <Button title="Cadastrar" onPress={() => {/* Lógica de cadastro */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default RegisterScreen;
