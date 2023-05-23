import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { addCompanyEmployer } from '../database/employerdb';
import { addPersonalEmployer} from '../database/employerdb';
import { useNavigation } from '@react-navigation/native';

const EmployerRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [yearStarted, setYearStarted] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [age, setAge] = useState('');
  
    const navigation = useNavigation();
  
    const handleRegister = () => {
      if (type === 'company') {
        if (!companyName || !yearStarted) {
          console.log('Please enter all required fields.');
          return;
        }
        addCompanyEmployer(username, password, companyName, yearStarted)
        .then(() => {
          console.log('Company employer registered successfully.');
        })
        .catch(error => {
          console.log('Error registering company employer:', error);
        });
      } 
      else if (type === 'personal') {
        if (!firstName || !lastName || !age) {
          console.log('Please enter all required fields.');
          return;
        }
        addPersonalEmployer(username, password, firstName, lastName, dob, age)
        .then(() => {
          console.log('Personal employer registered successfully.');
        })
        .catch(error => {
          console.log('Error registering personal employer:', error);
        });
      } else {
        console.log('Please select a user type.');
        return;
      }
  
    };
  
    const handleDate = (event, selectedDate) => {
      const currentDate = selectedDate || dob;
      setDob(currentDate);
      setShowDatePicker(false);
  
      const today = new Date();
      const birthDate = new Date(currentDate);
      const age = today.getFullYear() - birthDate.getFullYear();
      setAge(age.toString());
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

        <Text>Choose Type of Business:</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Select Type" value="" />
          <Picker.Item label="Company/Organization" value="company" />
          <Picker.Item label="Personal Business" value="personal" />
        </Picker>
  
        {type === 'company' && (
          <>
            <TextInput
              placeholder="Company/Organization Name"
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
            />
            <TextInput
              placeholder="Year Started"
              style={styles.input}
              value={yearStarted}
              onChangeText={setYearStarted}
            />
          </>
        )}
  
        {type === 'personal' && (
          <>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            <Button title="Select Date of Birth" onPress={() => setShowDatePicker(true)} />
            {showDatePicker && (
              <DatePicker
                value={dob}
                mode="date"
                display="default"
                onChange={handleDate}
              />
            )}
            <TextInput
              placeholder="Age"
              style={styles.input}
              value={age}
              onChangeText={setAge}
            />
          </>
        )}
  
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
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
  
  export default EmployerRegister;