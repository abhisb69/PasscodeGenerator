import React, { useState } from "react";
import "./Generate.css";
function Generator(props) {
  const [passcode, setPasscode] = useState("");
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  const generator = () => {
    let n = 10,
      result = "",
      i = 1;
    while (i <= n) {
      result += letters.charAt(Math.floor(Math.random() * 62));
      i++;
    }
    setPasscode(result);
  };
  const copy = () => {
    navigator.clipboard.writeText(passcode);
    alert("Passcode copied!!");
  };
  return (
    <div className="passcode-wrapper">
      <h1 className="header-wrapper">Passcode Generator</h1>
      <div className="display-passcode">
        {passcode.length === 0 ? (
          <span>Get your passcode...</span>
        ) : (
          <>{passcode}</>
        )}
      </div>
      <div className="btn-wrapper">
        <button onClick={generator}>Generator</button>
        {passcode.length === 0 ? (
          <></>
        ) : (
          <>
            <button onClick={copy}>copy</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Generator;
