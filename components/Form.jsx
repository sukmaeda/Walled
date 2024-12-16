import {useState} from 'react';
import { SafeAreaView, TextInput } from 'react-native';

export default function FormComponent() {
    const [name, setName] = useState(' ')
    return (
        <SafeAreaView>
            <TextInput
                style = {styles.input}
                placeholder = 'Enter your name'
                value = {name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style = {styles.input}
                placeholder = 'Enter your email address'
                value = {name}
                onChangeText={(text) => setEmail(text)}
                keyboardType='email'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    }
})