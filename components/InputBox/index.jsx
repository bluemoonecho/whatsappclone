import React, { useState } from 'react';
import styles  from './styles'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons}  from '@expo/vector-icons'


const InputBox = () =>{
    
    const [message, setMessage ] = useState('')
    
    const onMicrophonePress = () => {
        console.warn('Microphone')
    }
    const onSendPress = () => {
        console.warn(`Sending: ${message}`)
        //send a message to the backend
        setMessage('');
    }

    const onPress = () => {
        if(!message){
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color={'gray'}/>
                    <TextInput 
                    style={styles.textInput}
                    multiline
                    value={message}
                    placeholder={'Type a message'}
                    onChangeText={setMessage}
                    />
                <Entypo name='attachment' size={24} style={styles.icons} color={'gray'}/>
                {!message && <Fontisto name='camera' size={24} color={'gray'}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
            { !message
                ? <MaterialCommunityIcons name='microphone' size={24} color={'white'}/>
                : <MaterialIcons name='send' size={24} color={'white'}/>
            }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox