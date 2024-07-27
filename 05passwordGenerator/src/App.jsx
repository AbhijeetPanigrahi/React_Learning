import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // useRef hook (for the 'copy button')

  const passwordRef = useRef(null); // took a ref of input (we acn use this ref for showing the user that text copied)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password).then(() => {
      // Show the copied message
      setCopied(true);
      // Hide the copied message after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) {
      str += "0123456789";
    }
    if (charsAllowed) {
      str += "~!@#$%^&*()_+{}[]`-";
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed]); // these are the dependencies for the passwordGenerator function

  // If anything will change run it -- that's the use of useEffect()
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charsAllowed, passwordGenerator]); // but these are the dependencies for running purpose

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-3 my-16 text-red-400  bg-gray-700 shadow-md rounded-lg">
        <div className="text-center pb-3 text-green-400 text-2xl">
          Password Generator
        </div>
        <div className="flex-shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // for useRef hook
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          {copied && (
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-green-500 text-white rounded transition-opacity duration-500 ease-in-out opacity-100">
              Copied!
            </div>
          )}
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
