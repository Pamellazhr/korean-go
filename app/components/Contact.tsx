"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Contact() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function sendContact(name: string, email: string, message: string) {
    try {
      await addDoc(collection(db, "contact"), {
        name: name,
        email: email,
        message: message,
        time: serverTimestamp(),
      });
    } catch (e) {
      alert(e);
    }
  }

  return (
    <section id="contact" className="px-8 py-24 lg:w-[650px] lg:mx-auto">
      <h1 className="text-3xl font-semibold mb-12 text-[#E19898] text-center">
        Contact Us
      </h1>
      <div className="flex flex-col gap-4 mb-8">
        <label htmlFor="name" className="text-xl font-medium text-[#E19898]">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="text-lg p-4 border border-[#7c7c7c] rounded-md"
          value={inputValue.name}
          onChange={(e) =>
            setInputValue({ ...inputValue, name: e.target.value })
          }
        />
        <label htmlFor="email" className="text-xl font-medium text-[#E19898]">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="text-lg p-4 border border-[#7c7c7c] rounded-md"
          value={inputValue.email}
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
        />
        <label htmlFor="message" className="text-xl font-medium text-[#E19898]">
          Message
        </label>
        <textarea
          id="message"
          cols={30}
          rows={10}
          style={{ resize: "none" }}
          placeholder="Type Something..."
          className="text-lg border border-[#7c7c7c] rounded-md h-[190px] p-4 placeholder:text-[#d9d9d9]"
          value={inputValue.message}
          onChange={(e) =>
            setInputValue({ ...inputValue, message: e.target.value })
          }
        ></textarea>
      </div>
      <button
        onClick={() => {
          if (!inputValue.name || !inputValue.email || !inputValue.message) {
            return alert("Please fill all the fields.");
          }
          sendContact(inputValue.name, inputValue.email, inputValue.message);
          setInputValue({
            name: "",
            email: "",
            message: "",
          });
          router.push("/admin/contact");
        }}
        className="py-4 rounded-md text-white bg-[#E19898] w-full font-medium text-lg"
      >
        Submit
      </button>
    </section>
  );
}

export default Contact;
