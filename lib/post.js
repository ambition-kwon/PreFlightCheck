import {db} from './firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  query,
  where,
  deleteDoc,
} from 'firebase/firestore';

export function createDocument(collectionName, documentData) {
  const newDocRef = doc(collection(db, collectionName));
  setDoc(newDocRef, documentData)
    .then(() => {
      console.log('문서가 정상적으로 등록되었습니다.');
    })
    .catch(error => {
      console.log('문서를 등록하는데 실패하였습니다:', error);
    });
}
export async function getDocumentsByUid(myCollection, uid) {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, myCollection), where('uid', '==', uid)),
    );
    const documents = [];
    querySnapshot.forEach(doc => {
      documents.push({
        documentID: doc.id,
        uid: doc.data().uid,
        startDate: doc.data().startDate,
        bookingNumber: doc.data().bookingNumber,
        flight: doc.data().flight,
        airline: doc.data().airline,
        departureAirport: doc.data().departureAirport,
        arrivalAirport: doc.data().arrivalAirport,
        departureTime: doc.data().departureTime,
        arrivalTime: doc.data().arrivalTime,
      });
    });
    console.log('문서가 정상적으로 불러와졌습니다.');
    return documents;
  } catch (error) {
    console.error('문서를 불러오는데 실패하였습니다: ', error);
  }
}

export async function deleteDocument(collectionName, documentId) {
  try {
    const documentRef = doc(collection(db, collectionName), documentId);
    await deleteDoc(documentRef);
    console.log('문서가 성공적으로 삭제되었습니다.');
  } catch (error) {
    console.error('문서를 삭제하는데 실패하였습니다::', error);
  }
}

// export async function getAllDocuments(myCollection) {
//   try {
//     const querySnapshot = await getDocs(collection(db, myCollection));
//     querySnapshot.forEach(doc => {
//       console.log('Document ID: ', doc.id);
//       console.log('Document data: ', doc.data());
//     });
//   } catch (error) {
//     console.error('Error getting documents: ', error);
//   }
// }
