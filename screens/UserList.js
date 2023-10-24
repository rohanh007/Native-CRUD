import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, QuerySnapshot, setDoc } from 'firebase/firestore';
import db from '../firebase/firebase.config';
import emptyList from '../images/ext/rolled_eyes.png';

export default function Home({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const colRef = collection(db, 'users');
    onSnapshot(colRef, (QuerySnapshot) => {
      const users = [];
      QuerySnapshot.forEach((doc) => {
        const { name, mail, phone, pictureURL } = doc.data();
        users.push({
          id: doc.id,
          name,
          mail,
          phone,
          pictureURL,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={users}
        numColumns={1}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={{ fontWeight: '400' }}>Nothing to see here :/</Text>
            <Image source={emptyList} style={{ width: 100, height: 100, marginTop: 30 }} />
          </View>
        }
        renderItem={({ item }) => (
          <Pressable style={styles.container} onPress={() => navigation.navigate('User Details', { item })}>
            <View style={styles.innerContainer}>
              <Image source={{ uri: item.pictureURL }} style={styles.imagePre} />
            </View>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemMail}>{item.mail}</Text>
            </View>
          </Pressable>
        )}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonAdd} onPress={() => navigation.navigate('Create New User')}>
          <Text style={styles.textButton}>CREATE USER</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  empty: {
    padding: 100,
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', // Use this to make the button container transparent
    alignItems: 'center',
    

  },
  buttonAdd: {
    elevation: 3,
    padding: 20,
    backgroundColor: '#1ecfea',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imagePre: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: 'contain',
    borderRadius: 50 / 2,
    marginRight: 20,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemMail: {
    fontWeight: '300',
  },
});
