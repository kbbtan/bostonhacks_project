import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default LogIn = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        const firebaseConfig = OWN_FIREBASE_CONFIG;
          
        initializeApp(firebaseConfig);
    }, [])

    const submitLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            Alert.alert(errorMessage);
            setEmail('');
            setPassword('');
        });
    }

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.formHeader}>Login</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder={"dandre_pouros@frami.biz"}
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder={"••••••••••••••••••"}
                secureTextEntry={true}
            />

            <Pressable style={styles.signInButton} onPress={() => submitLogin()}>
                <Text style={styles.signInText}>Login</Text>
            </Pressable>
            <Pressable style={styles.logInButton} onPress={() => navigation.navigate('signUp')}>
                <Text style={styles.logInText}>Sign Up</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 30
    },
    formHeader: {
        color: "#185f56",
        fontSize: 40,
        marginVertical: 60
    },
    inputLabel: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20
    },
    input: {
        height: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        padding: 10
    },
    signInButton: {
        backgroundColor: "#185f56",
        borderWidth: 1,
        borderColor: "#185f56",
        borderRadius: 10,
        paddingVertical: 10,
        width: "100%",
        marginTop: 40
    },
    signInText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    logInButton: {
        borderWidth: 1,
        borderColor: "#185f56",
        borderRadius: 10,
        paddingVertical: 10,
        width: "100%",
        marginTop: 20
    },
    logInText: {
        fontSize: 20,
        textAlign: "center"
    }
})
