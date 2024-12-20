import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { getTransactions, getPosts } from "../api/restAPI";
import HistoryCard from "../components/HistoryCard";

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setLoading(true);
      const user = await getPosts();

      setUserData(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getTransaction = async () => {
    try {
      const data = await getTransactions();
      setPosts(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    getTransaction();
  }, []);

  return (
    <SafeAreaView>
      {userData && (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
              source={require("../assets/runa.jpg")}
              style={{ width: 46, height: 46, borderRadius: 100 }}
            ></Image>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: 700 }}>
                {userData ? userData.full_name : "Loading..."}
              </Text>
              <Text>Personal Account</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity>
              <Image
                source={require("../assets/matahari.png")}
                style={{ width: 32, height: 32, borderRadius: 100 }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingLeft: 15 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Image
                source={require("../assets/logout.png")}
                style={{ width: 25, height: 25, borderRadius: 100 }}
              ></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <View style={styles.greetings}>
              <Text style={styles.greeting}>
                Good Morning, {userData ? userData.full_name : "User"}
              </Text>
              <Text style={styles.description}>
                Check all your incoming and outgoing transactions here
              </Text>
            </View>
            <Image
              source={require("../assets/Group.png")}
              style={{ width: 117, height: 110 }}
            />
          </View>

          <View style={styles.accountInfo}>
            <Text style={styles.accountLabel}>Account No.</Text>
            <Text style={styles.accountNumber}>100899</Text>
          </View>

          <View style={styles.balanceContainer}>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.balanceLabel}>Balance</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text style={styles.balanceAmount}>Rp {userData.balance} </Text>
                <Image
                  source={require("../assets/view 1.png")}
                  style={{ width: 25, height: 16, marginTop: 10 }}
                ></Image>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.addButtons}
                onPress={() => navigation.navigate("TopUp")}
              >
                <Image
                  source={require("../assets/Group 11.png")}
                  style={{ width: 60, height: 60 }}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sendButtons}
                onPress={() => navigation.navigate("Transfer")}
              >
                <Image
                  source={require("../assets/Group 12.png")}
                  style={{ width: 60, height: 60 }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.transactionHistory}>
            <Text style={styles.transactionHeader}>Transaction History</Text>
            {posts.length > 0 ? (
              <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <HistoryCard
                    name={item.from_to}
                    kind={item.type}
                    nominal={item.amount}
                    date={item.created_at}
                  />
                )}
              />
            ) : (
              <Text>No data</Text>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const data = [
  {
    id: 1,
    name: "Jabami Yumeko",
    type: "Transfer",
    date: "11 December 2024",
    amount: -7500000,
  },
  {
    id: 2,
    name: "Mary Saotome",
    type: "Topup",
    date: "11 December 2024",
    amount: 7500000,
  },
  {
    id: 3,
    name: "Jabami Yumeko",
    type: "Transfer",
    date: "10 December 2024",
    amount: -7500000,
  },
  {
    id: 4,
    name: "Mary Saotome",
    type: "Topup",
    date: "10 December 2024",
    amount: 7500000,
  },
  {
    id: 5,
    name: "Jabami Yumeko",
    type: "Transfer",
    date: "09 December 2024",
    amount: -7500000,
  },
  {
    id: 6,
    name: "Mary Saotome",
    type: "Topup",
    date: "09 December 2024",
    amount: 7500000,
  },
  {
    id: 7,
    name: "Jabami Yumeko",
    type: "Transfer",
    date: "08 December 2024",
    amount: -7500000,
  },
  {
    id: 8,
    name: "Mary Saotome",
    type: "Topup",
    date: "08 December 2024",
    amount: 7500000,
  },
];

const TransactionItem = ({ name, type, date, amount }) => (
  <View style={styles.transactionItem}>
    <View>
      <Text style={styles.transactionName}>{name}</Text>
      <Text style={styles.transactionType}>{type}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text
      style={[
        styles.transactionAmount,
        amount >= 0 ? styles.positiveAmount : styles.negativeAmount,
      ]}
    >
      {amount.toLocaleString("id-ID")}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  container: {
    marginHorizontal: 20,
  },
  profile: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "pink",
    marginTop: 10,
    paddingHorizontal: 10,
    display: "flex",
    alignItems: "center",
    height: 80,
    width: "100%",
  },
  greetings: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flexDirection: "row",
  },
  description: {
    color: "black",
    fontSize: 16,
    marginTop: 16,
  },
  accountInfo: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#19918F",
  },
  accountLabel: {
    fontSize: 20,
    color: "white",
  },
  accountNumber: {
    fontSize: 20,
    color: "white",
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButtons: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
  balanceLabel: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
  },
  addButtons: {
    borderRadius: 3,
  },
  sendButtons: {
    borderRadius: 3,
  },
  transactionHistory: {
    marginTop: 20,
    height: 345,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  transactionName: {
    fontWeight: "bold",
  },
  transactionAmount: {
    fontSize: 16,
  },
  positiveAmount: {
    color: "green",
  },
  negativeAmount: {
    color: "red",
  },
});
