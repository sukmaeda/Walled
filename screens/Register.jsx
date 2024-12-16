import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FormComponent from '../components/Form';
export default function Register() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Vector.png')} style={{width: 210, height: 50}}></Image>
      </View>

      <View style={styles.form}>
        <FormComponent state='register'></FormComponent>
      </View>

      <View style={styles.register}>
        <Text>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={{color: 'blue'}}> Sign-in here.</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20
  },
  logo: {
    marginTop: 100,
    alignItems: 'center'
  },
  form: {
    marginTop: 200
  },
  register: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
