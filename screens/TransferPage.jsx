import { SafeAreaView, StyleSheet, Text, TextInput, View, Dropdown, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { createTopup, createTransfer } from '../api/restAPI';

export default function TransferPage() {
  const navigation = useNavigation();
  const [from_to, setFrom_to] = useState('')
  const [amount, setAmount] = useState([]);
  const [notes, setNotes] = useState('');
  const [isVisible, setVisible] = useState(false)
  const handleModal = () => {
    setVisible(!isVisible)
  }

  const handleSubmit = async () => {
      try {
        const body = {
          "type": "d", // c for credit & d for debit
          "from_to": from_to,
          "amount": amount,
          "description": notes
        }
        console.log('body', body)
  
        const user = await createTransfer(body);
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
        <View style={[styles.direction, {flexDirection:'row', alignItems:'center', padding:5}]}>
            <Text style={{width:35, fontSize: 15, color: 'white', fontWeight: 'bold', marginLeft: 15}}>To: </Text>
            <TextInput
            style={{ color: 'white', fontSize: 15}}
            placeholder='Masukkan rekening tujuan'
            placeholderTextColor="white"
            inputMode='numeric'
            onChangeText={setFrom_to}
            />
        </View>
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

        <View style={styles.notes}>
            <Text>Notes</Text>
            <TextInput
                style = {styles.inputNotes}
                placeholder='Write your notes'
                onChangeText={setNotes}
            />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.sendTransfer}>Transfer</Text>
        </TouchableOpacity>
        
        <Modal visible={isVisible} transparent = {true}>
            <View style = {{flexDirection : "row", alignItems : "center", justifyContent : "center", flex :1}}>
              <View style ={{backgroundColor : "white", height : "60%", width : "80%"}}>
                <View style ={{ flexDirection : "column", justifyContent : "between", height : "100%"
                }}>
                <Text style ={{textAlign : "center"}}>Transfer Success!</Text>
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
  direction: {
    backgroundColor: "teal",
  },
  amountScreen: {
  },
  amount:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'left',
  },
  input: {
    fontSize: 30,
  },
  notes: {
    marginTop: 20
  },
  inputNotes: {
    fontSize: 20,
    marginHorizontal: 10
  },
  sendTransfer: {
    padding: 20,
    marginTop: 100,
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center',
  }
});
