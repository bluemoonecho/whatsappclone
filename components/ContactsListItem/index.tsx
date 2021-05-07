import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { User } from '../../types'
import styles from './style'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'


export type ContactItemProps = {
    user: User;
}

const ContactListItem = (props: ContactItemProps) =>{
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
       //navigate to chat rooom with this user
        // navigation.navigate('ChatRoom');
        // navigation.navigate('ChatRoom', {
        //     // id: chatRoom.id,
        //     name: user.name,
        // })
    };

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;