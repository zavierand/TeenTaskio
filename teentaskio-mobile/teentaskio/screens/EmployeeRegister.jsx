import React,{useState} from 'react';
import {View, TextInput, Button,StyleSheet,Image,Text} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import {addEmployee} from '../database/employeedb';
import {useNavigation} from '@react-navigation/native';

const EmployeeRegister = () =>
{
    const[username, setusername] = useState('');
    const[password,setPassword] = useState('');
    const[fname,setfname] = useState('');
    const[lname,setlname] = useState('');
    const[contactInfo, setContact] = useState('');
    const[dob, setDob] = useState(new Date());
    const[showDatePicker, setShowDatePicker] = useState(false);
    const[selectedDate, setSelectedDate] = useState('');
    const[age, setAge] = useState('')

    const navigation = useNavigation();

    const calculateAge = (dob) =>
    {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if(monthDiff < 0 || (monthDiff == 0 && today.getDate() < birthDate.getDate()))
        {
            age--;
        }
        return age.toString();
    };
       
    const handling = ()=> {
        const age = calculateAge(dob);

        addEmployee(username, password, fname,lname, contactInfo, dob.toISOString(),age)
        .then(() => {
            console.log('User registered successfully.');
        })
        .catch(error => {
            console.log('Information missing',error);
        });
    };

    const showDatePickerModal =() =>
    {
        setShowDatePicker(true);
    }

    const hideDatePickerModal = ()=>
    {
        setShowDatePicker(false);
    }
    const handleDate = (event,selectedDate) =>
    {
        const currentDate = selectedDate || dob;
        setDob(currentDate);
        hideDatePickerModal();
        setSelectedDate(currentDate.toDateString());
        const userAge = calculateAge(currentDate);
        setAge(userAge);
    }
    return (
    <View style={style.container}>
      <Image source={require('../assets/IMG_3974.png')} style={style.logo} />
      <Text>Create an Account</Text>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Username"
          style={style.input}
          value={username}
          onChangeText={setusername}
        />
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={style.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="First Name"
          style={style.input}
          value={fname}
          onChangeText={setfname}
        />
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Last Name"
          style={style.input}
          value={lname}
          onChangeText={setlname}
        />
      </View>

     <Button title= "Select Date of Birth" onPress={showDatePickerModal}/>
     {
        showDatePicker && (
            <DatePicker
            value ={dob}
            mode = "date"
            display = "default"
            onChange = {handleDate}
            />
        )
     }
     {selectedDate !== '' && (
            <Text style = {style.dateText}>Date of Birth: {selectedDate}
            </Text>
     )}
     {age !== '' && 
     <Text style = {style.ageText}>
        Age: {age}
        </Text>}

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Contact Information"
          style={style.contactInfo}
          value={contactInfo}
          onChangeText={setContact}
        />
      </View>
            <Button title = "Register" onPress={handling}/>
    </View>
    );
};
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    input: {
      width: 200,
      height: 40,
    },
    contactInfo:{
        width:300,
        height:50,
    },
    dateText: {
     marginVertical: 10,
     fontSize: 16,
    },
    ageText: {
        marginBottom: 10,
        fontSize: 16,
    },
  });


export default EmployeeRegister;

