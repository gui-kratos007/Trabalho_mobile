import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginTela = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/uvv-brasao.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        color="#00796B"
        labelStyle={{ color: 'white' }}
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        Entrar
      </Button>
      <Button
        mode="text"
        color="#00796B"
        labelStyle={{ color: '#00796B' }}
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate('RecuperacaoSenha')}
      >
        Esqueci a senha
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Cor de fundo
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
    color: '#00796B', // Cor do título
  },
  input: {
    width: 300,
    marginBottom: 20,
  },
  button: {
    width: 300,
    marginBottom: 20,
  },
  forgotPasswordButton: {
    width: 300,
  },
});

export default LoginTela;
