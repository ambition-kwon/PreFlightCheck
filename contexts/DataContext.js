import React from 'react';
import {createContext, useState} from 'react';
import {auth} from '../lib/firebase';
import {createDocument, getDocumentsByUid, deleteDocument} from '../lib/post';

const DataContext = createContext();

export function DataContextProvider({children}) {
  const [Data, setData] = useState([
    {
      uid: '',
      startDate: '',
      bookingNumber: '',
      flight: '',
      airline: '',
      departureAirport: '',
      arrivalAirport: '',
      departureTime: '',
      arrivalTime: '',
    },
  ]);
  const onLoad = async () => {
    try {
      const documents = await getDocumentsByUid('ticket', auth.currentUser.uid);
      setData(documents);
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    }
  };
  const onCreate = (
    startDate,
    bookingNumber,
    flight,
    airline,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
  ) => {
    const newData = {
      uid: auth.currentUser.uid,
      startDate: startDate,
      bookingNumber: bookingNumber,
      flight: flight,
      airline: airline,
      departureAirport: departureAirport,
      arrivalAirport: arrivalAirport,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
    };
    createDocument('ticket', newData);
  };
  // const onRemove = () => {
  //   const newData = {
  //     email: '',
  //     password: '',
  //   };
  //   setLoginData(newData);
  // };

  return (
    <DataContext.Provider value={{Data, onCreate, onLoad}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
