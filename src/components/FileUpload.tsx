"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import axios from "axios";
import { cn } from "@/lib/utils";

type Props = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
  imageStyles?: string;
};

export default function FileUpload({
  value,
  onChange,
  endpoint,
  imageStyles,
}: Props) {
  const fileType = value.split(".").pop();

  const handleDeleteFile = async (fileUrl: string) => {
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
        <Image
          fill
          src={value}
          alt="upload"
          className={cn("rounded-full", imageStyles)}
        />
        <button
          onClick={() => handleDeleteFile(value)}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button">
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline">
          {value}
        </a>
        <button
          onClick={() => handleDeleteFile(value)}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
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
