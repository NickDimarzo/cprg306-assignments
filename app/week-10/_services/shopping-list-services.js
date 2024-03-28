import { db } from "../_utils/firebase";
import { collection, getDocs, deleteDoc, addDoc, doc, getDoc } from "firebase/firestore";

export const getItems = async (id) => {
    try{
        const itemsCollectionRef = collection(db, "users", id, "items");
        const itemsSnapShot = await getDocs(itemsCollectionRef);

        const mappedItems = itemsSnapShot.docs.map((postDoc) =>({
            id: postDoc.id,
            ...postDoc.data(),
        }));
        return mappedItems;
    }
    catch (error){
        console.error("Error getting items", error);
    }
}

export const addItem = async (item, id) => {
    try {
        const docRef = await addDoc(collection(db, "users", id, "items"),
        {
            name: item.name,
            quantity: item.quantity,
            category: item.category,
        });
        return docRef.id;
    }
    catch (error){
        console.error("Error adding item", error);
    }
}

export const deleteItem = async (id, userId) => {
    try {
        await deleteDoc(doc(db, "users", userId , "items", id));
    }
    catch (error){
        console.error("Error deleting item", error);
    }
}

export const addUser = async (id) => {  
    try {
        await addDoc(collection(db, "users" , id));
    }
    catch (error){
        console.error("Error adding user", error);
    }
}

export const getUser = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  };