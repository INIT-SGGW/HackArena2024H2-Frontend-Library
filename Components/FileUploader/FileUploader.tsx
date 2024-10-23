import "./FileUploader.css";
import { useRef, useState } from "react";

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
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (file: File) => {
    if (file && !fileTypes.includes(file.name.split(".").pop()!)) {
      setError("Niepoprawny format pliku");
      return;
    }
    if (file) {
      setFile(file);
      setMessage(file.name);
    }
  };

  const handleSendFile = () => {
    setInputDisabled(true);
    setError(null);
    if (file) {
      sendFile(file).then(() => {
        setMessage(`Plik ${file.name} został wysłany`);
      }).catch((error) => {
        setError(error.message);
      });
    } else {
      setError("Nie wybrano pliku");
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
      <div className="file">
        <input type="file" ref={inputRef} className="file--input" accept={fileTypes.map((type) => `.${type}`).join(", ")} onChange={(e) => handleChange(e.target.files![0])} />
        <div className="file--content" onClick={handleClick}>
          <span>{message}</span>
          <Button onClick={handleSendFile} disabled={inputDisabled} className={`btn btn__primary`} border>{inputDisabled ? componentText.buttons.disabled : componentText.buttons.send}</Button>
        </div>
      </div >
      <span className={`input__span${error ? " input__span--visible" : ""}`}>
        {error}
      </span>
    </div >
  );
}

export default FileUploader;
