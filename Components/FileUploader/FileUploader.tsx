import "./FileUploader.css";
import { useEffect, useRef, useState } from "react";

//COMPONENTS
import { Button } from "..";

//ASSETS
import text from "../../Assets/text.json";
import { ComponentText } from "./types";

function FileUploader({ sendFile, fileTypes }: { sendFile: (file: File) => Promise<void>, fileTypes: string[] }) {
  const componentText: ComponentText = text.fileUploader;
  const [file, setFile] = useState<File | null>(null);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(`${componentText.label} (${fileTypes.map((type) => `.${type}`).join(", ")})`);
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState<boolean>(false);




  const handleChange = (file: File) => {

    setSuccess(false);

    if (file && !fileTypes.includes(file.name.split(".").pop()!)) {
      setMessage("Niepoprawny format pliku");
      setError(true);
      return;
    }
    if (file) {
      setFile(file);
      setMessage(file.name);
      setError(false);
    }
  };

  const handleSendFile = () => {
    setInputDisabled(true);
    setError(false);
    setSuccess(false);
    if (file) {
      sendFile(file).then(() => {
        setMessage(`Plik ${file.name} został wysłany`);
        setSuccess(true);
      }).catch((error) => {
        setMessage(error.message);
        setError(true);
      });
    } else {
      setMessage("Nie wybrano pliku");
      setError(true);
    }
    setInputDisabled(false);
  }

  const handleClick = () => {
    if (inputRef) {
      inputRef.current?.click();
    }
  }

  return (
    <div className="file--wrapper" >
      <div className={`file${error ? " file--error" : ""}${success ? " file--success" : ""}`}>
        <input
          type="file"
          ref={inputRef}
          className="file--input"
          accept={fileTypes.map((type) => `.${type}`).join(", ")}
          onChange={(e) => handleChange(e.target.files![0])}
        />
        <div className="file--content" onClick={handleClick}>
          <div className={`file--text${error ? " file--text-error" : ""}${success ? " file--text-success" : ""}`}>
            <span>{message}</span>
          </div>
          <Button onClick={handleSendFile} disabled={inputDisabled} backgroundColor={success ? "#8bd15c" : error ? "var(--warning-color)" : ""} className={`btn btn__primary`} border>{inputDisabled ? componentText.buttons.disabled : componentText.buttons.send}</Button>
        </div>
      </div >
    </div >
  );
}

export default FileUploader;
