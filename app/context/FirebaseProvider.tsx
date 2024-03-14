"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";

type FirebaseContextType = {
  contact: any;
  setContact: React.Dispatch<React.SetStateAction<any>>;
  blog: any;
  setBlog: React.Dispatch<React.SetStateAction<any>>;
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
  const [contact, setContact] = useState<any>([]);
  const [blog, setBlog] = useState<any>([]);

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
