import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//TODO: Figure out dotenv

export default Home = ({navigation}) => {
    const [user, setUser] = React.useState(null);

    const firebaseConfig = OWN_FIREBASE_CONFIG;
        
    initializeApp(firebaseConfig);

    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user);
            }
        })
    })

    if (user) {
        return (
            <View style={styles.homePage}>
                <View style={styles.homeHeader}>
                    <Text>Good Evening, {user.displayName}</Text>
                </View>

                <Pressable style={styles.bottom} onPress={() => navigation.navigate("createDiary")}>
                    <Text>Add Diary</Text>
                </Pressable>
            </View>
        )
    } else {
        // Unauthenticated.
        return null;
    }
}

styles = StyleSheet.create({
    homePage: {
        width: "100%",
        height: "100%",
    },
    homeHeader: {
        height: 500,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row"
    },
    bottom: {
        backgroundColor: "red",
        height: 500
    }
});