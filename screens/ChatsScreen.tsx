import * as React from 'react';
import { StyleSheet, FlatList  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem'
import chatRoom from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {
    return (
      <View style={styles.container}>
          <FlatList 
          style={{width: '100%'}}
          data={chatRoom}
          renderItem={({ item }) => <ChatListItem chatRoom={item}/>}
          keyExtractor={(item: { id: any; }) => item.id}
          />
          <NewMessageButton/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
