"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import axios from "axios";

type Props = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
};

export default function FileUpload({ value, onChange, endpoint }: Props) {
  const fileType = value.split(".").pop();

  const handleDeleteImage = async (fileUrl: string) => {
    try {
      const { data } = await axios.put("/api/uploadthing", { url: fileUrl });

      if (data.success) {
        onChange("");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="upload" className="rounded-full" />
        <button
          onClick={() => handleDeleteImage(value)}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 ring-0 shadow-sm"
          type="button">
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
