import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RegistroTela = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
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
      >
        Registrar
      </Button>
      <Button
        mode="text"
        color="#00796B"
        labelStyle={{ color: '#00796B' }}
        style={styles.linkButton}
        onPress={() => navigation.navigate('Login')}
      >
        Voltar ao Login
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B',
  },
  input: {
    width: 300,
    marginBottom: 20,
  },
  button: {
    width: 300,
    marginBottom: 20,
  },
  linkButton: {
    width: 300,
  },
};

export default RegistroTela;
