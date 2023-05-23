import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Image ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../database/logindb';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    login(username, password)
      .then((user) => {
        console.log('Logged in:', user);
      })
      .catch((error) => {
        console.log('Login failed:', error);
      });
  };

  const handleRegister = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <View style={styles.container}>
        <Image source ={require('../assets/teentaskio-logo.png')} style = {styles.logo} />
        <Text>WELCOME TO TEENTASKIO</Text>
        <Text> </Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  logo:{
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyConten: 'center',
  }
});

export default LoginScreen;
