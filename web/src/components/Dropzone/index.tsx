import React, { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";

import "./styles.css";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropezone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Imagem  do estabelecimento" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default Dropezone;
