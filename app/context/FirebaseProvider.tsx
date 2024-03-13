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
  blog: DocumentData[];
  setBlog: React.Dispatch<React.SetStateAction<DocumentData[]>>;
};

const FirebaseContext = React.createContext<FirebaseContextType>({
  contact: [],
  setContact: () => {},
  blog: [],
  setBlog: () => {},
});

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [contact, setContact] = useState<DocumentData[]>([]);
  const [blog, setBlog] = useState<DocumentData[]>([]);

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
    const q = query(collection(db, "blog"), orderBy("time", "desc"));

    return onSnapshot(q, (querySnapshot) => {
      setBlog(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        contact,
        setContact,
        blog,
        setBlog,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
