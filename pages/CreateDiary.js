import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, Keyboard } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import AudioRecorderPlayer, {
AVEncoderAudioQualityIOSType,
AVEncodingOption,
AudioEncoderAndroidType,
AudioSet,
AudioSourceAndroidType} from 'react-native-audio-recorder-player';
//TODO: Figure out dotenv

export default Home = ({navigation}) => {
    const [user, setUser] = React.useState(null);
    const [diaryContent, setDiaryContent] = React.useState('');

    const [recording, setRecording] = React.useState(false);

    const firebaseConfig = OWN_FIREBASE_CONFIG
        
    initializeApp(firebaseConfig);

    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user);
            }
        })
    })

    const audioRecorderPlayer = new AudioRecorderPlayer();

    const triggerRecording = () => {
        if (!recording) {
            const path = 'test.m4a';
            
            const audioSet = {
                AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
                AudioSourceAndroid: AudioSourceAndroidType.MIC,
                AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
                AVNumberOfChannelsKeyIOS: 2,
                AVFormatIDKeyIOS: AVEncodingOption.aac
            };

            audioRecorderPlayer.startRecorder(path, audioSet)
                .then((uri) => {
                    console.log('started recording');
                })
                .catch((error) => {
                    console.log(error);
                })
        
        } else {
            audioRecorderPlayer.stopRecorder()
                .then((result) => {
                    console.log('stopped recording')
                })
                .catch((error) => {

                })
        }

        setRecording(!recording);
    }

    const recordingButtonStyle = recording ? styles.submitButtonActive : styles.submitButton;
    
    if (user) {
        return (
            <View style={styles.createDiaryPage}>
                <Pressable style={styles.createDiaryHeader} onPress={() => {Keyboard.dismiss()}}>
                    <Text style={styles.createDiaryHeaderText}>How are you feeling today?</Text>
                    <Image style={styles.createDiaryHeaderImage} source={{uri: user.photoURL}}/>
                </Pressable>

                <TextInput
                    style={[styles.input, styles.statusBar]}
                    value={"Nov 13, 2021 9:41 p.m. Saturday, Rainy"}
                    editable={false}
                />

                <Text style={styles.inputHeader}>Start here...</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setDiaryContent}
                    value={diaryContent}
                    placeholder={".................."}
                    multiline={true}
                />

                <View style={styles.submitButtons}>
                    <Pressable style={styles.submitButton}>
                        <Image style={styles.submitButtonImage} source={{uri: "https://img.icons8.com/fluency-systems-regular/48/000000/add-image.png"}}/>
                    </Pressable>
                    <Pressable style={recordingButtonStyle} onPress={() => triggerRecording()}>
                        <Image style={styles.submitButtonImage} source={{uri: "https://img.icons8.com/material-outlined/24/000000/microphone.png"}}/>
                    </Pressable>
                    <Pressable style={styles.submitButton}>
                        <Image style={styles.submitButtonImage} source={{uri: "https://img.icons8.com/ios/50/000000/sent.png"}}/>
                    </Pressable>
                </View>
            </View>
        )
    } else {
        // Unauthenticated.
        return null;
    }
}

styles = StyleSheet.create({
    createDiaryPage: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    createDiaryHeader: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20
    },
    createDiaryHeaderText: {
        fontSize: 25,
        marginRight: 10,
        color: "#185f56"
    },
    createDiaryHeaderImage: {
        width: 75,
        height: 75
    },
    inputHeader: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        color: "#185f56",
        fontWeight: "500"
    },
    input: {
        height: 475,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#3dc1b0",
        color: "#185f56"
    },
    statusBar: {
        height: 40,   
    },
    submitButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20
    },
    submitButton: {
        height: 50,
        width: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#185f56"
    },
    submitButtonImage: {
        width: 25,
        height: 25,
        tintColor: "white"
    },
    submitButtonActive: {
        height: 50,
        width: 100,
        borderRadius: 10,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }
});