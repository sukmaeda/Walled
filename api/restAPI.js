import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken')

const api = axios.create({
  baseURL: 'http://54.254.164.127/api/v1',
  headers: {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + token
  }
});

export const createTopup = async (body)=> {
  console.log(body)
  try {

    console.log(token)

    const response = await api.post('/transactions', body,
      {headers: {
        Authorization: 'Bearer ' + token._j
        }}
    );

    return response.data.data;
  } catch (error) {
    console.log(error.response.data)
    throw new Error('Failed to fetch posts: ' + error.message);
  }
};

export const createTransfer = async (body)=> {
  console.log(body)
  try {

    console.log(token)

    const response = await api.post('/transactions', body,
      {headers: {
        Authorization: 'Bearer ' + token._j
        }}
    );

    return response.data.data;
  } catch (error) {
    console.log(error.response.data)
    throw new Error('Failed to fetch posts: ' + error.message);
  }
};

export const getPosts = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken')
    const response = await api.get('/users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
        }
    });
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to create post: ' + error.message);
  }
};

export const getTransactions = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken')
    const response = await api.get('/transactions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
        }
    });
    console.log(response,"trt")
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post: ' + error.message);
  }
};

export const loginAcc = async (payLoad) => {
  console.log('pay', payLoad)
  try {
    const response = await api.post('/auth/login', payLoad);
  console.log('hh', response);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (payLoad) => {
    console.log(payLoad)
  try {
    const response = await api.post('/auth/register', payLoad);
    console.log("test")
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("hoy")
    throw new Error('error regis: '+error.response.data.message);
  }
};


export default api;