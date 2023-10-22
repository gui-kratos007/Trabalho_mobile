import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeTela = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/uvv-brasao.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo à Tela Principal</Text>
      <Button
        mode="contained"
        color="#00796B"
        labelStyle={{ color: 'white' }}
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        Sair
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B',
  },
  button: {
    width: 300,
  },
});

export default HomeTela;
