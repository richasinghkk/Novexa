import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function ResumeUpload({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFileName(acceptedFiles[0].name);
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
        isDragActive
          ? "border-cyan-400 bg-cyan-900/20"
          : "border-gray-600 bg-[#111827]"
      }`}
    >
      <input {...getInputProps()} />

      <h2 className="text-2xl font-bold text-white">
        📄 Upload Resume
      </h2>

      <p className="text-gray-400 mt-3">
        Drag & Drop your PDF here
      </p>

      <p className="text-cyan-400 mt-2">
        Click to Browse
      </p>

      {fileName && (
        <p className="text-green-400 mt-5 font-semibold">
          Selected File: {fileName}
        </p>
      )}
    </div>
  );
}

export default ResumeUpload;