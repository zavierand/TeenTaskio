import React from 'react';
import {View, Button, StyleSheet,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterPage = () =>
{
    const navigation = useNavigation();

    const goToEmployerReg = () => {
        navigation.navigate('EmployerRegister');
    };

    const goToEmployeeReg =() => {
        navigation.navigate('EmpoloyeeRegister');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.text}>
            Choose Type of User Below
        </Text>
          <Button title="Employer" onPress={goToEmployerReg} />
          <Button title="Employee" onPress={goToEmployeeReg} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        frontSize: 20,
        marginBottom: 20,
    }
  });

export default RegisterPage;