"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useFirebaseContext } from "../context/FirebaseProvider";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { useRouter } from "next/navigation";
import { Plus } from "@phosphor-icons/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "react-quill/dist/quill.snow.css";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

function AdminBlog({ page }: { page: "home" | "new" }) {
  const router = useRouter();
  const { blog } = useFirebaseContext();
  const [inputValue, setInputValue] = useState({
    title: "",
    place: "",
    thumbnail: "",
  });
  const [quillValue, setQuillValue] = useState("");

  function uploadFile(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          setInputValue({ ...inputValue, thumbnail: downloadUrl });
        });
      }
    );
  }

  async function sendBlog(
    title: string,
    place: string,
    thumbnail: string,
    content: string
  ) {
    try {
      await addDoc(collection(db, "blog"), {
        title: title,
        place: place,
        thumbnail: thumbnail,
        content: content,
        time: serverTimestamp(),
      });
    } catch (e) {
      alert(e);
    }
  }

  return (
    <section id="admin-blog" className="mt-28 lg:mt-20 p-8 lg:p-16">
      <h1 className="text-[#E19898] text-center font-bold text-2xl lg:text-3xl mb-12">
        {page === "home" && "Blog"}
        {page === "new" && "New Blog"}
      </h1>

      {page === "home" && (
        <section id="home" className="relative">
          <Link
            href="/admin/blog/new"
            className="p-2 bg-[#E19898] text-white rounded-md text-xl absolute -top-[5.5rem] right-0"
          >
            <Plus weight="bold" />
          </Link>
          {blog.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center gap-8 py-16">
              <h1>You haven't written any blog.</h1>
              <Link
                href="/admin/blog/new"
                className="px-4 py-2 bg-[#E19898] text-white rounded-md text-lg font-medium"
              >
                Add new blog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blog.map((data: any) => {
                return (
                  <Link
                    href={`/admin/blog/${data.id}`}
                    key={data.id}
                    className="rounded-md bg-[#E19898] text-white p-4"
                  >
                    <h3 className="text-xl font-medium mb-2">{data.title}</h3>
                    <h4 className="opacity-70">
                      Last Updated:{" "}
                      {new Date(data.time?.seconds * 1000).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </h4>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      )}

      {page === "new" && (
        <section id="new">
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="title"
                className="text-xl font-medium text-[#E19898]"
              >
                Title
              </label>
              <input
                value={inputValue.title}
                onChange={(e) =>
                  setInputValue({ ...inputValue, title: e.target.value })
                }
                type="text"
                id="title"
                className="text-lg p-4 border border-[#7c7c7c] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="place"
                className="text-xl font-medium text-[#E19898]"
              >
                Place
              </label>
              <input
                value={inputValue.place}
                onChange={(e) =>
                  setInputValue({ ...inputValue, place: e.target.value })
                }
                type="text"
                id="place"
                className="text-lg p-4 border border-[#7c7c7c] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="thumbnail"
                className="text-xl font-medium text-[#E19898]"
              >
                Thumbnail
              </label>
              <input type="file" onChange={uploadFile} id="thumbnail" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-xl font-medium text-[#E19898]">
                Content
              </label>
              <ReactQuill
                theme="snow"
                value={quillValue}
                onChange={setQuillValue}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  if (
                    !inputValue.title ||
                    !inputValue.place ||
                    !inputValue.thumbnail ||
                    !quillValue
                  ) {
                    return alert("Please fill all the fields.");
                  }
                  sendBlog(
                    inputValue.title,
                    inputValue.place,
                    inputValue.thumbnail,
                    quillValue
                  );
                  setInputValue({
                    title: "",
                    place: "",
                    thumbnail: "",
                  });
                  setQuillValue("");
                  router.push("/admin/blog");
                }}
                className="px-4 py-2 bg-[#E19898] text-white rounded-md text-lg font-medium"
              >
                Add
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default AdminBlog;
