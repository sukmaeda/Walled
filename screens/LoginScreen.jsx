import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FormComponent from '../components/Form';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Vector.png')} style={{width: 210, height: 50}}></Image>
      </View>

      <View style={styles.form}>
        <FormComponent state='login'></FormComponent>
      </View>

      <View style={styles.register}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{color: 'blue'}}> Sign-up here.</Text>
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
    marginTop: 250
  },
  register: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
