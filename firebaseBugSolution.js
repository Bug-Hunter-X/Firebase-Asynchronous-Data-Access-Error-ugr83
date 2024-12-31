Instead of directly accessing properties within the `onSnapshot` callback, use a conditional check to make sure the data exists:

```javascript
import { onSnapshot, doc } from 'firebase/firestore';

const docRef = doc(db, 'collection', 'documentId');

onSnapshot(docRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    if (data.property) {
      console.log(data.property); //Access property safely
    } else {
      console.log('Property not found');
    }
  } else {
    console.log('Document does not exist');
  }
});
```
Alternatively, use `getDoc` for a single data fetch, handling the promise properly:
```javascript
import { getDoc, doc } from 'firebase/firestore';

const docRef = doc(db, 'collection', 'documentId');
getDoc(docRef).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    if (data.property) {
        console.log(data.property);
    }
  } else {
    console.log('Document does not exist');
  }
}).catch((error) => {
  console.error('Error fetching document:', error);
});
```