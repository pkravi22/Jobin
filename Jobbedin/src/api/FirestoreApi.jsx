import { db } from "../firebaseConfig";
import { addDoc, collection, onSnapshot, query, orderBy,updateDoc } from "firebase/firestore";

// Reference to the Firestore collection
const dbRef = collection(db, "posts");
const userRef = collection(db, "users");

// Function to add a post
export const posts = async (status) => {
  const postData = {
    status: status,
    createdAt: new Date(),  // Add timestamp
  };


  try {
    await addDoc(dbRef, postData); // Add data to Firestore
    console.log("Data added successfully:", postData);
  } catch (err) {
    console.error("Error adding data:", err);
  }
};

export const users = async (status) => {
    const postData = {
      status: status,
      createdAt: new Date(),  // Add timestamp
    };
    
  
    try {
      await addDoc(userRef, postData); // Add data to Firestore
      console.log("Data added successfully:", postData);
    } catch (err) {
      console.error("Error adding data:", err);
    }
  };

// Function to fetch and subscribe to posts
export const getStatus = (setAllStatus, setIsDataChanged) => {
  const postsQuery = query(dbRef, orderBy("createdAt", "desc")); // Order by latest first
  const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
    const postsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAllStatus(postsData); // Update state with new data
    setIsDataChanged(true); // Mark that data has been updated
  });
  return unsubscribe; // Return unsubscribe function
};
export const userAdd = async (username, email, password) => {
    try {
      const userCollection = collection(db, "users");
      const newUser = {
        username,
        email,
        password, // Avoid storing plaintext passwords; this is just for illustration.
        createdAt: new Date(),
      };
      await addDoc(userCollection, newUser);
      console.log("User added successfully to Firestore");
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
      throw error;
    }
}

export const updateUserDetails = async (userId, updatedDetails) => {
    try {
      // Reference to the user document in Firestore
      const userRef = doc(db, "users", userId);
  
      // Update the document with new details
      await updateDoc(userRef, updatedDetails);
  
      console.log("User details updated successfully!");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  export const getUserById = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.error("No user found with the provided ID");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };
