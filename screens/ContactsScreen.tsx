import * as React from 'react';
import { StyleSheet, FlatList  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ContactListItem from '../components/ContactsListItem'
import users from '../data/Users';
import NewMessageButton from '../components/NewMessageButton';

export default function ContactsScreen() {
    return (
        <View style={styles.container}>
            <FlatList 
            style={{width: '100%'}}
            data={users}
            renderItem={({ item }) => <ContactListItem user={item}/>}
            keyExtractor={(item: { id: any; }) => item.id}
            />
            <NewMessageButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    }
});