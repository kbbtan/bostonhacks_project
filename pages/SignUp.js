import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default SignUp = ({navigation}) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    React.useEffect(() => {
        const firebaseConfig = OWN_FIREBASE_CONFIG;
          
        initializeApp(firebaseConfig);
    }, [])

    const submitSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name,
                photoURL: "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
            }).then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);

                setName('');
                setEmail('');
                setPassword('');
            }) 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.formHeader}>Sign Up</Text>
            
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder={"Dandre Pouros"}
            />

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

            <Pressable style={styles.signInButton} onPress={() => submitSignUp()}>
                <Text style={styles.signInText}>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.logInButton} onPress={() => navigation.navigate('logIn')}>
                <Text style={styles.logInText}>Log In</Text>
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
