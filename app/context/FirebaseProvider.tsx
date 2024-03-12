"use client";

import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";

type FirebaseContextType = {
  contact: DocumentData[];
  setContact: React.Dispatch<React.SetStateAction<DocumentData[]>>;
};

const FirebaseContext = React.createContext<FirebaseContextType>({
  contact: [],
  setContact: () => {},
});

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [contact, setContact] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "contact"), orderBy("time", "desc"));

    return onSnapshot(q, (querySnapshot) => {
      setContact(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <FirebaseContext.Provider
      value={{
        contact,
        setContact,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
