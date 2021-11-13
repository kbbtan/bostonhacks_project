import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBycV1vSpifKhaPKHQpXf3nU19wYYK3WMg",
  authDomain: "bostonhacks-6b45a.firebaseapp.com",
  projectId: "bostonhacks-6b45a",
  storageBucket: "bostonhacks-6b45a.appspot.com",
  messagingSenderId: "993766656089",
  appId: "1:993766656089:web:17ebc5feb30ee9813f8948",
  measurementId: "G-D92DDZCKXP"
};

const app = initializeApp(firebaseConfig);

const registerUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const firestore = getFirestore();

const addData = async () => {
  console.log('hello');
  
  await addDoc(collection(firestore, "users"), {
    name: "john",
    info: "uh oh"
  });

  console.log("document written");
}


export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttons}
      onPress={() => registerUser('kbbtan@bu.edu', 'password')}>
        <Text style={styles.buttonsText}>Register</Text>
      </Pressable>
      <Pressable style={styles.buttons}
      onPress={() => addData()}>
        <Text style={styles.buttonsText}>Add Data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    backgroundColor: '#e0dbcd',
    padding: 10,
    margin: 10
  },
  buttonsText: {
    fontSize: 20
  }
});
