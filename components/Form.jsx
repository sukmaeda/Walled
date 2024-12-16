import {useState} from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Text, Button, TouchableOpacity, isSelected } from 'react-native';

export default function FormComponent({state}) {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const validate = () => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!validEmail) {
          setErrors({
            messageEmailError: "Enter a valid e-mail!",
          });
          return false;
        } else {
            setErrors('')
        }
        const validPassword = password.length >= 7 ? true : false;
        if (!validPassword) {
          setErrors({
            messagePasswordError: "Password can't be less than 7",
          });
          return false;
        } else {
            setErrors('')
        }
      };

    return (
        <SafeAreaView>
            {state === "register" && <TextInput
                style = {styles.input}
                placeholder = 'Enter your name'
                value = {name}
                onChangeText={(text) => setName(text)}
            />}
            {state === "register" && <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                autoCorrect={false}
                inputMode="numeric"
                autoCapitalize="none"
            />}
            <TextInput
                style = {styles.input}
                placeholder = 'Enter your email address'
                value = {email}
                onChangeText={(text) => setEmail(text)}
                keyboardType='email'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <TextInput
                style = {styles.input}
                placeholder='Enter your password address'
                value = {password}
                onChangeText={(text) => setPassword(text)}
                autoCorrect = {false}
                autoCapitalize='none'
                secureTextEntry
            />
            {errors.messageEmailError && <Text>{errors.messageEmailError}</Text>}
            {errors.messagePasswordError && (<Text>{errors.messagePasswordError}</Text>)}

            {state === "register" && <View style={styles.register}>
               <Text>I have read and agree to the </Text>
               <Text style={{color: 'blue'}}>Terms and Conditions</Text>
               <Text style={{color: 'red'}}>*</Text> 
            </View>}

            {state === "login" ? (
                <View style={styles.button}>
                 <TouchableOpacity onPress={validate}>
                 <Text style={{color: 'white', textAlign: 'center'}}>Log In</Text>
                </TouchableOpacity>   
                </View>
                
            ) : (
                
                <View style={styles.button}>
                  <TouchableOpacity onPress={validate}>
                    <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
                  </TouchableOpacity>  
                </View>
                
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    },
    button: {
        marginTop: 20,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'teal',
    },
    register: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginHorizontal: 10
    }
})