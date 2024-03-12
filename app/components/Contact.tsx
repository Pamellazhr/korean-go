"use client";

import React, { useState } from "react";
import { sendContact } from "../firebase";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="px-8 py-24 lg:w-[650px] lg:mx-auto">
      <h1 className="text-3xl font-semibold mb-12 text-[#A83949] text-center">
        Contact Us
      </h1>
      <div className="flex flex-col gap-4 mb-8">
        <label htmlFor="name" className="text-xl font-medium text-[#A83949]">
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
        <label htmlFor="email" className="text-xl font-medium text-[#A83949]">
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
        <label htmlFor="message" className="text-xl font-medium text-[#A83949]">
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
        className="py-4 rounded-md text-white bg-[#A83949] w-full font-medium text-lg"
      >
        Submit
      </button>
    </section>
  );
}

export default Contact;
