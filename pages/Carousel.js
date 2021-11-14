import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import CarouselComp from 'react-native-snap-carousel';

const appData = [
    {
        imageLink: require("../components/illustration1.png"),
        headerText: "Share your journey",
        subText: "Detail your struggles and successes anonymously"
    },
    {
        imageLink: require("../components/illustration2.png"),
        headerText: "Find a community",
        subText: "Respond to posts by other users and join interests groups"
    },
    {
        imageLink: require("../components/illustration3.png"),
        headerText: "Connect with healthcare professionals",
        subText: "Start a private conversation anonymously with our dedicated healthcare team"
    }
]

const sliderWidth = Dimensions.get('window').width + 80
const itemWidth = Math.round(sliderWidth) * 0.7

//TODO: Sliding indicators
const CarouselItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={item.imageLink}
                style={styles.image}
            />
            <Text style={styles.header}>{item.headerText}</Text>
            <Text style={styles.text}>{item.subText}</Text>
        </View>
    )
}

export default Carousel = ({navigation}) => {
    const isCarousel = useRef(null);

    return (
        <View style={styles.welcomeContainer}>
            <CarouselComp
                layout="tinder"
                layoutCardOffset={0}
                ref={isCarousel}
                data={appData}
                renderItem={CarouselItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />

            <View style={styles.buttonContainer}>
                <Pressable style={styles.signInButton} onPress={() => navigation.navigate('signUp')}>
                    <Text style={styles.signInText}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.logInButton} onPress={() => navigation.navigate('logIn')}>
                    <Text style={styles.logInText}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        flex: 1,
        alignItems: "center"
    },
    container: {
        backgroundColor: "white",
        width: itemWidth,
        elevation: 7,
        paddingTop: 100,
        height: 550
    },
    image: {
        width: itemWidth,
        height: 300
    },
    header: {
        color: "#1f1f39",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30
    },
    text: {
        color: "#858597",
        fontSize: 16,
        textAlign: "center",
        paddingTop: 30
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    signInButton: {
        backgroundColor: "#185f56",
        borderWidth: 1,
        borderColor: "#185f56",
        borderRadius: 10,
        paddingVertical: 10,
        width: 170,
        marginRight: 19
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
        width: 170
    },
    logInText: {
        fontSize: 20,
        textAlign: "center"
    }
})