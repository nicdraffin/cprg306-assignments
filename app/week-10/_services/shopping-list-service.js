import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

import { View, Text } from 'react-native'
import React from 'react'

const ShoppingListService = () => {

    const getItems = async (userId) => {
        const items = [];
        const itemsRef = collection(db, "users", userId, "items");
        const q = query(itemsRef);
        const querySnapshot = await getDocs(q);
      
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
      
        return items;
    };
    
    const addItem = async (userId, item) => {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    };

  return (
    <View>
      <Text>shopping-list-service</Text>
    </View>
  );
};

export default ShoppingListService;