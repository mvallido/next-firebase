import { firestore, auth, increment } from '../lib/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useState } from 'react';

// Allows user to heart or like a post
export default function Heart({ postRef }) {
    // Listen to heart document for currently logged in user
    const heartRef = postRef.collection('hearts').doc(auth.currentUser.uid);
    const [userLiked, setUserLiked] = useState(false);
    
    heartRef.get().then((doc) => {
        if (doc.exists) {
            setUserLiked(true)
        } else {
            // doc.data() will be undefined in this case
            setUserLiked(false)
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    // Create a user-to-post relationship
    const addHeart = async () => {
      const uid = auth.currentUser.uid;
      const batch = firestore.batch();
  
      batch.update(postRef, { heartCount: increment(1) });
      batch.set(heartRef, { uid });
  
      await batch.commit();
    };
  
    // Remove a user-to-post relationship
    const removeHeart = async () => {
      const batch = firestore.batch();
  
      batch.update(postRef, { heartCount: increment(-1) });
      batch.delete(heartRef);
  
      await batch.commit();
    };

    
    return userLiked ? (<button onClick={removeHeart}>💔 Unheart</button>) : (<button onClick={addHeart}>💗 Heart</button>)
  }