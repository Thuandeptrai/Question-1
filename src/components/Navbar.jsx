import React, { useContext, useEffect, useState } from "react";
import Book from "./Book";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [addrtype, setAddrType] = useState('none')
  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);
  function handleAddrTypeChange(e) {
    setAddrType(e.target.value);
  }
    
  return (
    <>
      <header
        className="bg-white flex border-b border-gray-primary mb-7 sticky top-0 z-20"
        style={{ height: "59px" }}
      >
        <div className="grid place-items-center flex-1 ">
          <input
            className="shadow appearance-none border rounded w-8/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search"
            value={query}
          />
        </div>
      
      </header>
      <Book query={displayMessage}  author={addrtype}/>
    </>
  );
}
