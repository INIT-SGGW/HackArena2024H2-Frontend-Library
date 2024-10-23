import "./FileUploader.css";
import { MouseEvent, useRef, useState } from "react";

//COMPONENTS
import { Button } from "..";
import { getEventStatus, EventStatus } from "../../Utils";

//ASSETS
import text from "../../Assets/Text/main.json";
import { ComponentText } from "./types";
import { useAuth } from "../../Context";
import { TeamService } from "../../Services";

interface Props { }

enum FileStatus {
  UNSELECTED,
  SELECTED,
  SENDING,
  SUCCESS,
  ERROR
}
function FileUploader(props: Props) {
  const componentText: ComponentText = text.fileUploader;
  const fileTypes = ["zip"];
  const [file, setFile] = useState<File | null>(null);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(`${componentText.label} (${fileTypes.map((type) => `.${type}`).join(", ")})`);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { teamName } = useAuth();

  const handleChange = (file: File) => {
    if (file && file.type !== "application/x-zip-compressed" && file.type !== "application/zip") {
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
      TeamService.uploadSolution(teamName, file!).then((response) => {
        if (response.status === 201) {
          setMessage("Plik został wysłany");
        } else {
          setError("Wystąpił błąd podczas wysyłania pliku");
        }
      }).catch((error) => {
        setError("Wystąpił błąd podczas wysyłania pliku");
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

        {/* {
            status !== FileStatus.UNSELECTED && <div className="file--sending">
              <span>{message}</span>
              {status !== FileStatus.SENDING &&
                <div>
                  <Button onClick={handleCancel} className={`file--button btn btn__secondary${status !== FileStatus.SUCCESS ? " file--button__halfborder" : ""}`}>Cofnij</Button>
                  {status !== FileStatus.SUCCESS && <Button onClick={handleSendFile} className="file--button btn btn__secondary file--button__halfborder">Wyślij</Button>}
                </div>
              }
            </div>
          } */}

      </div >
      <span className={`input__span${error ? " input__span--visible" : ""}`}>
        {error}
      </span>
    </div >
  );
}

export default FileUploader;
