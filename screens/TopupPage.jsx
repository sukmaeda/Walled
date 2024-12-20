import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Plane} from 'lucide-react';
import {useEffect, useState} from 'react';
import { createTopup } from '../api/restAPI';

export default function TopupPage() {
  const navigation = useNavigation()
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [isVisible, setVisible] = useState(false)
  const handleModal = () => {
    setVisible(!isVisible)
  }


  const handleSubmit = async () => {
    try {
      const body = {
        "type": "c", // c for credit & d for debit
        "from_to": "283763",
        "amount": amount,
        "description": notes
      }
      console.log('body', body)

      const user = await createTopup(body);
      console.log("test", user);

    } catch (err) {
      console.log("Ini Error")
      setError(err.message);
      Alert.alert('ERRORRRRR');

    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.amountScreen}>
            <Text>Amount</Text>
            <View style={styles.amount}>
                <Text>IDR</Text>
                <TextInput
                    style = {styles.input}
                    placeholder='Enter the amount'
                    inputMode='numeric'
                    onChangeText={setAmount}
                />
            </View>
        </View>

        {/* <View>
            <TouchableOpacity>
                <Dropdown><Text>BYOND Pay</Text></Dropdown>
            </TouchableOpacity>
        </View> */}
        
        <View style={styles.BYONDPay}>
          <TouchableOpacity>
            <Image source={require('../assets/Group 19.png')} style={{margin: 10}}></Image>
          </TouchableOpacity>
          {/* <Plane color="black" size={20} /> */}
       </View>

        <View style={styles.notes}>
            <Text>Notes</Text>
            <TextInput
                style = {styles.inputNotes}
                placeholder='Write your notes'
                onChangeText={setNotes}
            />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.sendTopUp}>Top Up</Text>
        </TouchableOpacity>

        <Modal visible={isVisible} transparent = {true}>
          <View style = {{flexDirection : "row", alignItems : "center", justifyContent : "center", flex :1}}>
            <View style ={{backgroundColor : "white", height : "60%", width : "80%"}}>
              <View style ={{ flexDirection : "column", justifyContent : "between", height : "100%"
              }}>
                <Text style ={{textAlign : "center"}}>Transaction Success!</Text>
                <TouchableOpacity onPress={handleModal}><Text>Close</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20
  },
  amount:{
    flexDirection: 'row',
    justifyContent: 'left',
    backgroundColor: 'white'
  },
  input: {
    fontSize: 30,
  },
  BYONDPay: {
    display: "flex", 
    flexDirection: 'row',
    marginTop: 75,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  notes: {
    marginTop: 30,
  },
  inputNotes: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  sendTopUp: {
    marginTop: 100,
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  }
});
