import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Profile */}
        <View style={styles.profile}>
          <Image source={require('./assets/Foto.jpeg')} style={{width: 46, height: 46, borderRadius: 100}}></Image>
          <View style={{ marginLeft: 20}}>
            <Text style={{fontWeight: 700}}>Sukma Jan Eda</Text>
            <Text >Personal Account</Text>
          </View>
          <View style={{flex: 1}}>
          </View>
          <Image source={require('./assets/matahari.png')} style={{width: 32, height: 32, borderRadius: 100}}></Image>
        </View>

        <View style={styles.greetings}>
          <View>
            <Text style={styles.greeting}>Good Morning, Chelsea</Text>
            <Text style={styles.description}>Check all your incoming and outgoing transactions here</Text>
          </View>
          <Image source={require('./assets/Group.png')} style={{width:100, height: 100}}/>
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>100899</Text>
        </View>
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.addButtons}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButtons}>
              <Text>✉️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.transactionHistory}>
        <Text style={styles.transactionHeader}>Transaction History</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TransactionItem {...item} />}
        />
      </View>
    </View>
    </SafeAreaView>
  );

};

const data = [
  { id: 1, name: 'Aditya Gizwanda', type: 'Transfer', date: '08 December 2024', amount: -7500000 },
  { id: 2, name: 'Aditya Gizwanda', type: 'Topup', date: '08 December 2024', amount: 7500000 },
];

const TransactionItem = ({name, type, date, amount}) => (
  <View style={styles.transactionItem}>
    <View>
      <Text style={styles.transactionName}>{name}</Text>
      <Text style={styles.transactionType}>{type}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={[styles.transactionAmount, amount >= 0 ? styles.positiveAmount : styles.negativeAmount]}>
      {amount.toLocaleString('id-ID')}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  profile: {
    flexDirection: 'row',
    borderRadius: 5,
    marginTop:30,
    elevation: 3,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    height: 80,
    width: '100%'
  },
  greetings:{
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'left'
  },
  greeting: {
    fontSize: 28, // Ukuran font judul diperbesar
    fontWeight: 'bold',
    color: 'black', // Warna teks hitam
    marginBottom: 10,
  },
  accountInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'aqua'
  },
  balanceContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'aqua',
    padding: 20,
    justifyContent: 'center'
  },
  addButtons: {
    borderRadius: 3
  },
  sendButtons: {
    borderRadius: 3
  },
  transactionHistory: {
    padding: 16,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionName: {
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 16,
  },
  positiveAmount: {
    color: 'green',
  },
  negativeAmount: {
    color: 'red',
  },
});
