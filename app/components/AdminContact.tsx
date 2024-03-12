"use client";

import React from "react";
import { useFirebaseContext } from "../context/FirebaseProvider";

function AdminContact() {
  const { contact } = useFirebaseContext();

  return (
    <section
      id="admin-contact"
      className="mt-28 lg:mt-20 p-8 lg:p-16 relative overflow-x-auto"
    >
      <h1 className="text-[#A32F3F] text-center font-bold text-2xl lg:text-3xl mb-12">
        List of Contacts
      </h1>
      <table className="w-full text-left text-gray-500">
        <thead className="text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {contact.map((data) => (
            <tr key={data.time} className="bg-white border-b">
              <td className="px-6 py-4">{data.name}</td>
              <td className="px-6 py-4">{data.email}</td>
              <td className="px-6 py-4">{data.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminContact;
