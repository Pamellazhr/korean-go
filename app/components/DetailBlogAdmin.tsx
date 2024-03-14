"use client";

import { useFirebaseContext } from "@/app/context/FirebaseProvider";
import { X } from "@phosphor-icons/react";
import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../firebase";

function DetailBlogAdmin({ id }: { id: string }) {
  const router = useRouter();
  const { blog } = useFirebaseContext();
  const [inputValue, setInputValue] = useState({
    title: "",
    place: "",
    thumbnail: "",
  });
  const [quillValue, setQuillValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

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

  const blogDetail = blog.find((data) => data.id === id);

  useEffect(() => {
    document.body.style.overflowY = isEdit ? "hidden" : "auto";
  }, [isEdit]);

  if (!blogDetail) return null;

  return (
    <section id="detail-blog-admin" className="p-8 lg:p-16">
      {isEdit && (
        <section id="edit" className="fixed inset-0 bg-black/75 p-4 lg:p-8">
          <div className="w-full h-full p-6 bg-white shadow-md border border-[#7c7c7c50] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-end">
                <button onClick={() => setIsEdit(false)}>
                  <X size={32} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="title"
                  className="text-xl font-medium text-[#A83949]"
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
                  className="text-xl font-medium text-[#A83949]"
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
                  className="text-xl font-medium text-[#A83949]"
                >
                  Thumbnail
                </label>
                <input type="file" onChange={uploadFile} id="thumbnail" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xl font-medium text-[#A83949]">
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={quillValue}
                  onChange={setQuillValue}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={async () => {
                  if (
                    !inputValue.title ||
                    !inputValue.place ||
                    !inputValue.thumbnail ||
                    !quillValue
                  ) {
                    return alert("Please fill all the fields.");
                  }
                  await setDoc(doc(collection(db, "blog"), id), {
                    title: inputValue.title,
                    place: inputValue.place,
                    thumbnail: inputValue.thumbnail,
                    content: quillValue,
                    time: serverTimestamp(),
                  });
                  setInputValue({
                    title: "",
                    place: "",
                    thumbnail: "",
                  });
                  setQuillValue("");
                  router.push("/admin/blog");
                }}
                className="px-4 py-2 bg-[#A32F3F] text-white rounded-md text-lg font-medium"
              >
                Update
              </button>
            </div>
          </div>
        </section>
      )}

      <div className="mb-16 flex justify-between">
        <Link
          href="/admin/blog"
          className="border-2 border-[#A32F3F] px-4 py-2 rounded-md text-[#A32F3F] text-lg font-medium"
        >
          Back
        </Link>
        <div className="flex gap-4">
          <button
            onClick={() => setIsEdit(true)}
            className="bg-[#A32F3F] px-4 py-2 rounded-md text-white text-lg font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => {
              const ref = doc(db, "blog", id);
              deleteDoc(ref)
                .then(() => {
                  router.push("/admin/blog");
                })
                .catch((error) => {
                  alert(error);
                });
            }}
            className="bg-[#A32F3F] px-4 py-2 rounded-md text-white text-lg font-medium"
          >
            Delete
          </button>
        </div>
      </div>
      <img
        src={blogDetail.thumbnail}
        alt="thumbnail"
        width={1000}
        height={1000}
        className="object-cover w-full h-[400px]"
      />
      <h1 className="my-12 font-bold text-4xl">{blogDetail.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
    </section>
  );
}

export default DetailBlogAdmin;
